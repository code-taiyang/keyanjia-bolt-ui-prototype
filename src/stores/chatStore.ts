import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChatSession } from '../components/chat/types';

interface ChatState {
  sessions: ChatSession[];
  activeSessionId: string | null;
  setActiveSession: (id: string) => void;
  addSession: (session: ChatSession) => void;
  starSession: (id: string) => void;
  renameSession: (id: string, title: string) => void;
  deleteSession: (id: string) => void;
  archiveSession: (id: string) => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      sessions: [],
      activeSessionId: null,
      setActiveSession: (id) => set({ activeSessionId: id }),
      addSession: (session) =>
        set((state) => ({ sessions: [session, ...state.sessions] })),
      starSession: (id) =>
        set((state) => ({
          sessions: state.sessions.map((session) =>
            session.id === id
              ? { ...session, isStarred: !session.isStarred }
              : session
          ),
        })),
      renameSession: (id, title) =>
        set((state) => ({
          sessions: state.sessions.map((session) =>
            session.id === id ? { ...session, title } : session
          ),
        })),
      deleteSession: (id) =>
        set((state) => ({
          sessions: state.sessions.filter((session) => session.id !== id),
          activeSessionId:
            state.activeSessionId === id ? null : state.activeSessionId,
        })),
      archiveSession: (id) =>
        set((state) => ({
          sessions: state.sessions.map((session) =>
            session.id === id
              ? { ...session, isArchived: !session.isArchived }
              : session
          ),
        })),
    }),
    {
      name: 'chat-store',
    }
  )
);