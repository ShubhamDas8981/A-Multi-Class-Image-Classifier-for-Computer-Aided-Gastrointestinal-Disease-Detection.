# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import os
# from werkzeug.utils import secure_filename
# import tensorflow as tf
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing.image import load_img, img_to_array
# import numpy as np

# # Initialize Flask app
# app = Flask(__name__)
# CORS(app)  # Enable CORS to allow communication between frontend and backend

# # Folder to store uploaded images
# UPLOAD_FOLDER = 'uploads'
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16 MB max file size

# # Allowed file extensions
# ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

# # Ensure upload folder exists
# if not os.path.exists(UPLOAD_FOLDER):
#     os.makedirs(UPLOAD_FOLDER)

# # Load the pre-trained deep learning model
# MODEL_PATH = 'VggNet_16_kvasir.h5'  # Update this to the path of your model
# model = load_model(MODEL_PATH)

# # Class labels for the model predictions
# CLASS_LABELS = ['dyed-lifted-polyps', 'dyed-resection-margins', 'esophagitis','normal-cecum','normal-pylorus','normal-z-line','polyps','ulcerative-colitis']  # Update with your class names


# def allowed_file(filename):
#     """Check if the file has an allowed extension."""
#     return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# def preprocess_image(image_path):
#     """Preprocess the image for the model."""
#     img = load_img(image_path, target_size=(224, 224))  # Update target size as per your model
#     img_array = img_to_array(img)
#     img_array = np.expand_dims(img_array, axis=0)
#     img_array = img_array / 255.0  # Normalize the image if required by your model
#     return img_array


# @app.route('/upload', methods=['POST'])
# def upload_images():
#     """Handle image uploads and run predictions."""
#     if 'images' not in request.files:
#         return jsonify({'error': 'No files part in the request'}), 400

#     files = request.files.getlist('images')
#     if not files:
#         return jsonify({'error': 'No images selected'}), 400

#     predictions = []
#     for file in files:
#         if file and allowed_file(file.filename):
#             filename = secure_filename(file.filename)
#             filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
#             file.save(filepath)

#             # Preprocess the image and make a prediction
#             img_array = preprocess_image(filepath)
#             prediction = model.predict(img_array)
#             predicted_class = CLASS_LABELS[np.argmax(prediction)]  # Get class label
#             confidence = np.max(prediction)  # Confidence score

#             predictions.append({
#                 'filename': filename,
#                 'predicted_class': predicted_class,
#                 'confidence': float(confidence)
#             })
#         else:
#             return jsonify({'error': f"File '{file.filename}' is not allowed"}), 400

#     return jsonify({'message': 'Images processed successfully', 'predictions': predictions})


# @app.route('/status', methods=['GET'])
# def status():
#     """API endpoint to check if the server is running."""
#     return jsonify({'status': 'Server is running'})


# # Run the app
# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0', port=8000)

import os
import tensorflow as tf
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import numpy as np
from PIL import Image
from tensorflow.keras.models import load_model
from sklearn.preprocessing import LabelEncoder
from flask_cors import CORS  # To handle cross-origin requests

# Disable GPU usage (if not available)
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for the app
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})


# Set the upload folder for images
UPLOAD_FOLDER = 'static/uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # Max file size 16MB


# Try loading the model with custom_objects if needed
try:
    # Attempt to load the model with the custom_objects dictionary (if you have custom layers)
    model = load_model('VggNet_16_kvasir.h5', compile=False, custom_objects={})
except ValueError as e:
    print(f"Error loading model: {e}")
    model = None

if model is None:
    raise Exception("Failed to load model. Check if custom layers are required or version mismatch.")

# Define the updated classes for the model's prediction
CLASS_LABELS = [
    'dyed-lifted-polyps', 'dyed-resection-margins', 'esophagitis', 
    'normal-cecum', 'normal-pylorus', 'normal-z-line', 
    'polyps', 'ulcerative-colitis'
]

# LabelEncoder to convert model output to class labels
le = LabelEncoder()
le.fit(CLASS_LABELS)

# Set allowed file extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

# Function to check allowed extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Route for the prediction endpoint
# @app.route('/predict', methods=['POST'])
# def predict():
#     if 'file' not in request.files:
#         return jsonify({'error': 'No file part'}), 400

#     file = request.files['file']
#     if file.filename == '':
#         return jsonify({'error': 'No file selected'}), 400

#     if file and allowed_file(file.filename):
#         # Secure the file name
#         filename = secure_filename(file.filename)
#         file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
#         file.save(file_path)

#         try:
#             # Process the image for prediction
#             img = Image.open(file_path).resize((32, 32))  # Resize to 32x32 (same size as training data)
#             img = np.asarray(img) / 255.0  # Normalize the image
#             if img.shape[-1] == 1:  # If image has only 1 channel (grayscale), convert to 3 channels
#                 img = np.repeat(img, 3, axis=-1)  # Repeat channels to simulate RGB
#             img = np.expand_dims(img, axis=0)  # Add batch dimension

#             # Get prediction from the model
#             prediction = model.predict(img)
#             pred_class = le.inverse_transform([np.argmax(prediction)])[0]

#             return jsonify({'prediction': pred_class})

#         except Exception as e:
#             return jsonify({'error': f'Error processing image: {str(e)}'}), 500

#     return jsonify({'error': 'Invalid file format'}), 400
# Route for the prediction endpoint
# Route for the prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    files = request.files.getlist('file')
    if len(files) == 0:
        return jsonify({'error': 'No file selected'}), 400

    predictions = []
    for file in files:
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)

            try:
                # Process image for prediction
                img = Image.open(file_path).resize((224, 224))  # Resize to 224x224 (or appropriate size)
                img = np.asarray(img) / 255.0  # Normalize the image to [0, 1]

                # If the image has only 1 channel (grayscale), convert to 3 channels (RGB)
                if img.shape[-1] == 1:
                    img = np.repeat(img, 3, axis=-1)

                # Ensure the image has the shape (224, 224, 3)
                img = np.expand_dims(img, axis=0)  # Add batch dimension (1, 224, 224, 3)

                # Check the image shape
                assert img.shape == (1, 224, 224, 3), f"Expected shape (1, 224, 224, 3), but got {img.shape}"

                # Get prediction from the model
                prediction = model.predict(img)
                pred_class = le.inverse_transform([np.argmax(prediction)])[0]
                predictions.append(pred_class)

            except Exception as e:
                print(f"Error during prediction: {e}")
                return jsonify({'error': f'Error processing image: {str(e)}'}), 500
        else:
            return jsonify({'error': 'Invalid file format'}), 400

    return jsonify({'predictions': predictions})

if __name__ == "__main__":
    app.run(debug=True)