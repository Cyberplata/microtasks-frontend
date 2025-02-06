import {ProtectedRoute} from "../../routes/ProtectedRoute";

export const ProtectedPage = () => {
   return (
      <ProtectedRoute>
         Protected Page
      </ProtectedRoute>
   );
};