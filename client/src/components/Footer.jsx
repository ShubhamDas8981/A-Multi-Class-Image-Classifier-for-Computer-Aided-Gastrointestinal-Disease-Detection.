// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6 px-6">
//       <div className="flex flex-col sm:flex-row justify-between items-center">
//         <div className="mb-4 sm:mb-0">
//           <p>Developed by: [Your Team Name]</p>
//         </div>
//         <div className="flex space-x-4">
//           <a
//             href="#"
//             className="text-gray-300 hover:text-white transition-all"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2C6.477 2 2 6.484 2 12c0 4.989 3.657 9.128 8.438 9.879v-6.99h-2.54v-2.75h2.54v-2.122c0-2.521 1.492-3.908 3.787-3.908 1.098 0 2.244.196 2.244.196v2.468h-1.265c-1.247 0-1.636.774-1.636 1.566v1.8h2.781l-.445 2.75h-2.336v6.99C18.343 21.128 22 16.989 22 12c0-5.516-4.477-10-10-10z" />
//             </svg>
//           </a>
//           <a
//             href="#"
//             className="text-gray-300 hover:text-white transition-all"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M21 8a2.993 2.993 0 0 0-2.81-2h-.338C17.116 3.979 16.11 2.7 15.005 2h-6.01c-1.106.7-2.111 1.979-2.85 4H6.81C5.664 6 5 6.59 5 8s.664 2 1.81 2h.34c.01.083.03.165.05.25C5.69 13.738 4 17.493 4 18v1c0 .267.225.5.502.5h15.997c.277 0 .502-.233.502-.5v-1c0-.507-1.679-4.243-3.96-7.917.02-.086.04-.167.05-.25h.338c1.146 0 1.81-.59 1.81-2zm-5.5 0c0 .275-.217.5-.5.5h-6a.5.5 0 0 1-.5-.5v-1c0-.275.217-.5.5-.5h6c.283 0 .5.225.5.5v1z" />
//             </svg>
//           </a>
//           <a
//             href="#"
//             className="text-gray-300 hover:text-white transition-all"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22 5.998c0-2.206-1.794-4-4-4H6c-2.206 0-4 1.794-4 4v12.004c0 2.206 1.794 4 4 4h12c2.206 0 4-1.794 4-4V5.998zM9 19H7v-8h2v8zm-1-9.001A1.5 1.5 0 1 1 9.501 8.5c-.828 0-1.5.672-1.5 1.5zm10 9.001h-2v-4.5c0-1.379-1.122-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v4.5h-2v-8h2v1.118c.62-.72 1.517-1.118 2.5-1.118s1.88.398 2.5 1.118V11h2v8z" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-6">
      <div className="flex flex-col items-center sm:flex-row justify-between sm:items-center">
        {/* Developer Info */}
        <div className="text-center mb-4 sm:mb-0 sm:text-left">
          <p className="text-sm">
            Developed by: <span className="font-semibold">[Your Team Name]</span>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 justify-center sm:justify-end">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-300 hover:text-white transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12c0 4.989 3.657 9.128 8.438 9.879v-6.99h-2.54v-2.75h2.54v-2.122c0-2.521 1.492-3.908 3.787-3.908 1.098 0 2.244.196 2.244.196v2.468h-1.265c-1.247 0-1.636.774-1.636 1.566v1.8h2.781l-.445 2.75h-2.336v6.99C18.343 21.128 22 16.989 22 12c0-5.516-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-300 hover:text-white transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 8a2.993 2.993 0 0 0-2.81-2h-.338C17.116 3.979 16.11 2.7 15.005 2h-6.01c-1.106.7-2.111 1.979-2.85 4H6.81C5.664 6 5 6.59 5 8s.664 2 1.81 2h.34c.01.083.03.165.05.25C5.69 13.738 4 17.493 4 18v1c0 .267.225.5.502.5h15.997c.277 0 .502-.233.502-.5v-1c0-.507-1.679-4.243-3.96-7.917.02-.086.04-.167.05-.25h.338c1.146 0 1.81-.59 1.81-2zm-5.5 0c0 .275-.217.5-.5.5h-6a.5.5 0 0 1-.5-.5v-1c0-.275.217-.5.5-.5h6c.283 0 .5.225.5.5v1z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-white transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 5.998c0-2.206-1.794-4-4-4H6c-2.206 0-4 1.794-4 4v12.004c0 2.206 1.794 4 4 4h12c2.206 0 4-1.794 4-4V5.998zM9 19H7v-8h2v8zm-1-9.001A1.5 1.5 0 1 1 9.501 8.5c-.828 0-1.5.672-1.5 1.5zm10 9.001h-2v-4.5c0-1.379-1.122-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v4.5h-2v-8h2v1.118c.62-.72 1.517-1.118 2.5-1.118s1.88.398 2.5 1.118V11h2v8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
