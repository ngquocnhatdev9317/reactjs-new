import { create } from "zustand/react";

export type LoginState = 0 | 1 | 2; // 0: Not Logged In, 1: Logging In, 2: Logged In
export type LoginStore = {
  loginState: LoginState;
  setnNotLoggedIn: () => void;
  setLoggingIn: () => void;
  setLoggedIn: () => void;
};

const loginStore = create<LoginStore>((set) => ({
  loginState: 0,
  setnNotLoggedIn: () => set({ loginState: 0 }),
  setLoggingIn: () => set({ loginState: 1 }),
  setLoggedIn: () => set({ loginState: 2 }),
}));

export default loginStore;
