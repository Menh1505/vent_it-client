import { create } from 'zustand';

interface UserState {
    avatar: string | null;
    username: string | null;
    bio: string | null;
    address: string | null;
    isConnected: boolean;
    balance: string | null;
    chainId: number | null;
    // Actions
    setUser: (address: string, chainId: number, avatar: string, username: string, bio: string) => void;
    clearUser: () => void;
    setBalance: (balance: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
    avatar: null,
    username: null,
    bio: null,
    address: null,
    isConnected: false,
    balance: null,
    chainId: null,

    setUser: (address, chainId, avatar, username, bio) => set({
        address,
        chainId,
        avatar,
        username,
        bio,
        isConnected: true,
    }),

    clearUser: () => set({
        address: null,
        isConnected: false,
        avatar: null,
        username: null,
        bio: null, 
        balance: null,
        chainId: null,
    }),

    setBalance: (balance) => set({ balance }),
}));