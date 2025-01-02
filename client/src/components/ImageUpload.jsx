// import React, { useState, useRef } from 'react';
// import {
//   Box,
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Image,
//   Text,
//   Grid,
//   useToast,
// } from '@chakra-ui/react';
// import axios from 'axios';

// const ImageUpload = () => {
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const fileInputRef = useRef(null);
//   const toast = useToast();

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     const validFiles = files.filter(
//       (file) => file.type === 'image/jpeg' || file.type === 'image/png'
//     );

//     if (validFiles.length === 0) {
//       toast({
//         title: 'Invalid File Type',
//         description: 'Please select valid image files (JPEG or PNG).',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     setSelectedImages(validFiles);
//     setIsModalOpen(true); // Show modal after selecting images
//   };

//   const handleSubmit = async () => {
//     if (selectedImages.length === 0) {
//       toast({
//         title: 'No Images Selected',
//         description: 'Please select at least one image to upload.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     const formData = new FormData();
//     selectedImages.forEach((image) => {
//       formData.append('images', image);
//     });

//     try {
//       const response = await axios.post('http://localhost:8000/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       console.log(response.data);
//       toast({
//         title: 'Upload Successful',
//         description: 'Images have been uploaded successfully.',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });

//       // Reset the file input and clear the selected images
//       if (fileInputRef.current) {
//         fileInputRef.current.value = '';
//       }
//       setSelectedImages([]);
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error(error);
//       toast({
//         title: 'Upload Failed',
//         description: 'An error occurred while uploading the images.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bg="gray.100">
//       {/* Card Component */}
//       <Box bg="gray.800" p={8} rounded="lg" shadow="lg" maxWidth="md" width="100%">
//         <Box textAlign="center" mb={6}>
//           <Text fontSize="2xl" fontWeight="semibold" color="white">
//             Upload Your Images
//           </Text>
//         </Box>
//         <Box textAlign="center">
//           <Button
//             colorScheme="blue"
//             onClick={() => fileInputRef.current?.click()}
//           >
//             Choose Images
//           </Button>
//           <input
//             type="file"
//             accept=".jpg, .png"
//             multiple
//             ref={fileInputRef}
//             style={{ display: 'none' }}
//             onChange={handleImageChange}
//           />
//         </Box>
//       </Box>

//       {/* Modal for Selected Images */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Selected Images</ModalHeader>
//           <ModalBody>
//             <Grid templateColumns="repeat(2, 1fr)" gap={4}>
//               {selectedImages.map((image, index) => (
//                 <Box key={index} textAlign="center">
//                   <Image
//                     src={URL.createObjectURL(image)}
//                     alt={image.name}
//                     boxSize="80px"
//                     objectFit="cover"
//                     rounded="md"
//                     mb={2}
//                   />
//                   <Text fontSize="sm">{image.name}</Text>
//                 </Box>
//               ))}
//             </Grid>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="green" onClick={handleSubmit} mr={3}>
//               Submit
//             </Button>
//             <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };
// export default ImageUpload;


// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import 'react-toastify/dist/ReactToastify.css';

// const CustomModal = ({ open, onClose, children }) => {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// const ImageUpload = () => {
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const fileInputRef = useRef(null);

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     const validFiles = files.filter(
//       (file) => file.type === 'image/jpeg' || file.type === 'image/png'
//     );

//     if (validFiles.length === 0) {
//       toast.error('Please select valid image files (JPEG or PNG)');
//       return;
//     }

//     setSelectedImages(validFiles);
//     setOpenModal(true); // Show modal after selecting images
//   };

//   const handleSubmit = async () => {
//     if (selectedImages.length === 0) {
//       toast.error('No images selected');
//       return;
//     }

//     const formData = new FormData();
//     selectedImages.forEach((image) => {
//       formData.append('images', image);
//     });

//     try {
//       const response = await axios.post('http://localhost:8000/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       console.log(response.data);
//       toast.success('Images uploaded successfully!');

//       // Reset the file input and clear the selected images
//       if (fileInputRef.current) {
//         fileInputRef.current.value = '';
//       }
//       setSelectedImages([]);
//       setOpenModal(false);
//     } catch (error) {
//       console.error(error);
//       toast.error('Error uploading images');
//     }
//   };

//   return (
//     <div>
//     {/* Navbar */}
//     <Navbar />
//     <div className="flex justify-center items-center h-screen bg-gray-100 px-4 md:px-8">
//       {/* Toast Container */}
//       <ToastContainer position="top-center" />

//       {/* Card Component */}
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-semibold text-white">Upload Your Images</h1>
//         </div>
//         <div className="flex justify-center">
//           <label
//             className="bg-blue-500 text-white px-6 py-2 rounded-md cursor-pointer"
//             htmlFor="file-upload"
//           >
//             Choose Images
//           </label>
//           <input
//             id="file-upload"
//             type="file"
//             accept=".jpg, .png"
//             multiple
//             ref={fileInputRef}
//             className="hidden"
//             onChange={handleImageChange}
//           />
//         </div>
//       </div>

//       {/* Modal for Selected Images */}
//       <CustomModal open={openModal} onClose={() => setOpenModal(false)}>
//         <h2 className="text-xl font-bold mb-4">Selected Images</h2>
//         <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
//           {selectedImages.map((image, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <img
//                 src={URL.createObjectURL(image)}
//                 alt={image.name}
//                 className="w-20 h-20 object-cover mb-2 rounded"
//               />
//               <p className="text-xs text-gray-600">{image.name}</p>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={handleSubmit}
//           className="bg-green-500 text-white px-6 py-2 rounded-md mt-4"
//         >
//           Submit
//         </button>
//       </CustomModal>
//     </div>
//     {/* Footer */}
//     <Footer />
//     </div>
//   );
// };

// export default ImageUpload;
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './Navbar';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';

const CustomModal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(
      (file) =>
        (file.type === 'image/jpeg' || file.type === 'image/png') &&
        file.size <= 16 * 1024 * 1024 // Max size: 2MB
    );

    if (validFiles.length === 0) {
      toast.error('Please select valid image files (JPEG or PNG) under 2MB.');
      return;
    }

    setSelectedImages((prev) => [...prev, ...validFiles]);
    setOpenModal(true); // Show modal after selecting images
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (selectedImages.length === 0) {
      toast.error('No images selected.');
      return;
    }

    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append('file', image);
    });

    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response.data);
      if (response.data.predictions && response.data.predictions.length > 0) {
        setPrediction(response.data.predictions[0]);// Store the prediction
        toast.success('Images uploaded and prediction received!');
      }

      // if (response.data.prediction) {
      //   console.log("Prediction: ", response.data.prediction);
      //   alert("Predicted class: " + response.data.prediction);
      // } else {
      //   alert("Prediction failed");
      // }
      //toast.success('Images uploaded successfully!');

      // Reset the file input and clear the selected images
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setSelectedImages([]);
      setOpenModal(false);
    } catch (error) {
      console.error(error);
      toast.error('Error uploading images.');
    }
  };
 
  useEffect(() => {
    // Clean up URLs created with URL.createObjectURL
    return () => {
      selectedImages.forEach((image) => URL.revokeObjectURL(image.preview));
    };
  }, [selectedImages]);

  //return (
  //   <div>
  //     {/* Navbar */}
  //     <Navbar />
  //     <div className="flex justify-center items-center h-screen bg-gray-100 px-4 md:px-8">
  //       {/* Toast Container */}
  //       <ToastContainer position="top-center" />

  //       {/* Card Component */}
  //       <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
  //         <div className="text-center mb-6">
  //           <h1 className="text-2xl font-semibold text-white">Upload Your Images</h1>
  //         </div>
  //         <div className="flex justify-center">
  //           <label
  //             className="bg-blue-500 text-white px-6 py-2 rounded-md cursor-pointer"
  //             htmlFor="file-upload"
  //           >
  //             Choose Images
  //           </label>
  //           <input
  //             id="file-upload"
  //             type="file"
  //             accept=".jpg, .png"
  //             multiple
  //             ref={fileInputRef}
  //             className="hidden"
  //             onChange={handleImageChange}
  //           />
  //         </div>
  //       </div>

  //       {/* Modal for Selected Images */}
  //       <CustomModal open={openModal} onClose={() => setOpenModal(false)}>
  //         <h2 className="text-xl font-bold mb-4">Selected Images</h2>
  //         <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
  //           {selectedImages.map((image, index) => (
  //             <div key={index} className="flex flex-col items-center">
  //               <img
  //                 src={URL.createObjectURL(image)}
  //                 alt={image.name}
  //                 className="w-20 h-20 object-cover mb-2 rounded"
  //               />
  //               <p className="text-xs text-gray-600">{image.name}</p>
  //               <button
  //                 onClick={() => handleRemoveImage(index)}
  //                 className="text-xs text-red-500 mt-1"
  //               >
  //                 Remove
  //               </button>
  //             </div>
  //           ))}
  //         </div>
  //         <button
  //           onClick={handleSubmit}
  //           className="bg-green-500 text-white px-6 py-2 rounded-md mt-4"
  //         >
  //           Submit
  //         </button>
  //       </CustomModal>
        
  //     </div>
  //     {/* Prediction Result Card */}
  //     {prediction && (
  //         <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-8 w-full max-w-md">
  //           <h2 className="text-xl font-semibold text-white mb-4">Prediction Result</h2>
  //           <div className="text-white">
  //             <p>{`Predicted Class: ${prediction}`}</p>
  //           </div>
  //         </div>
  //       )}
  //     {/* Footer */}
  //     <Footer />
  //   </div>
  // );
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100 px-4 md:px-8">
        {/* Toast Container */}
        <ToastContainer position="top-center" />
  
        {/* Image Upload Card */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-white">Upload Your Images</h1>
          </div>
          <div className="flex justify-center">
            <label
              className="bg-blue-500 text-white px-6 py-2 rounded-md cursor-pointer"
              htmlFor="file-upload"
            >
              Choose Images
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".jpg, .png"
              multiple
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>
  
        {/* Modal for Selected Images */}
        <CustomModal open={openModal} onClose={() => setOpenModal(false)}>
          <h2 className="text-xl font-bold mb-4">Selected Images</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {selectedImages.map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  className="w-20 h-20 object-cover mb-2 rounded"
                />
                <p className="text-xs text-gray-600">{image.name}</p>
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="text-xs text-red-500 mt-1"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-6 py-2 rounded-md mt-4"
          >
            Submit
          </button>
        </CustomModal>
  
        {/* Prediction Result Card */}
        {prediction && (
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-8 w-full max-w-md">
            <h2 className="text-xl font-semibold text-white mb-4">Prediction Result</h2>
            <div className="text-white">
              <p>{`Predicted Class: ${prediction}`}</p>
            </div>
          </div>
        )}
      </div>
  
      {/* Footer */}
      <Footer />
    </div>
  );
  
};

export default ImageUpload;
