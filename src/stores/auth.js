//Auth.js
import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create((set) => ({
    auth: null,
    setAuth: (acessToken) => {
      const { user,
              iat: issuedAtTimestamp,
              exp: expireAtTimestamp, } = jwtDecode(acessToken);
      
      const secureTime = 5 * 60;
      const expireIn = expireAtTimestamp - issuedAtTimestamp - secureTime;
      
      set((state) => ({
        auth: {
          ...state.auth,
          acessToken,
          user,
          expireIn,
        },
      }));
    },
    
    setUser: (user) => set((state) => ({ auth: { ...state?.auth, user }})),

    clearAuth: () => set({ auth: null }),

}));

export default useAuthStore;
