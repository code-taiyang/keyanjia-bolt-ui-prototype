import { create } from 'zustand';

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
}

export interface Reference {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
}

export interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
  references?: string[];
}

interface LiteratureState {
  messages: Message[];
  references: Reference[];
  currentPaper: Paper | null;
  sendMessage: (content: string) => Promise<void>;
  uploadPaper: (paper: Paper) => void;
  clearCurrentPaper: () => void;
  startNewChat: () => void;
  getMessageReferences: (messageId: string) => Reference[];
  getPreviousMessage: (messageId: string) => Message | null;
  getNextMessage: (messageId: string) => Message | null;
  deleteMessage: (messageId: string) => void;
  renameMessage: (messageId: string, newTitle: string) => void;
  deleteMessages: (messageIds: string[]) => void;
  interpretReference: (reference: Reference) => Promise<void>;
  saveToLibrary: (reference: Reference) => void;
  saveToLibraryBatch: (references: Reference[]) => void;
}

export const useLiteratureStore = create<LiteratureState>((set, get) => ({
  messages: [
    {
      id: '1',
      type: 'ai',
      content: '欢迎使用文献AI，让我们开始探索学术研究的精彩世界。',
      timestamp: new Date().toISOString(),
      references: []
    }
  ],
  references: Array.from({ length: 5 }, (_, i) => ({
    id: `ref${i + 1}`,
    title: [
      '深度学习在气候预测中的应用研究',
      '基于神经网络的天气预报模型',
      '气候变化预测的新方法探索',
      '机器学习在环境科学中的应用',
      '全球气候模型的优化研究'
    ][i],
    authors: [
      ['张三', '李四', 'John Smith'],
      ['王五', '赵六', 'Sarah Chen'],
      ['Mike Johnson', '张三', '李四'],
      ['Sarah Chen', '王五', 'David Wilson'],
      ['李四', 'John Smith', 'Mike Johnson']
    ][i],
    journal: [
      'Nature Climate Change',
      'Science',
      'Environmental Research Letters',
      'Journal of Climate',
      'Climatic Change'
    ][i],
    year: `202${Math.floor(i / 3) + 1}`
  })),
  currentPaper: null,

  sendMessage: async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date().toISOString()
    };

    set(state => ({
      messages: [...state.messages, userMessage]
    }));

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: `根据最新研究，深度学习在气候预测领域展现出了显著的优势和潜力。[ref1]提出了一种创新的神经网络架构，能够更好地捕捉气候变化的长期趋势。[ref2]通过大规模实验验证了该方法的有效性，在多个基准数据集上取得了超过传统方法的性能。[ref3]进一步探索了模型的可解释性，为理解预测结果提供了新的视角。[ref4]则重点关注了模型在极端天气预测中的应用，证明了深度学习方法的鲁棒性。[ref5]综合了近年来的研究进展，提出了未来发展的关键方向。

建议从以下几个方面深入研究：

1. 模型架构的选择和优化
2. 大规模气候数据的预处理方法
3. 多源数据融合策略
4. 模型可解释性分析
5. 预测结果的不确定性量化

您对哪个方面特别感兴趣？我们可以深入讨论。`,
        timestamp: new Date().toISOString(),
        references: Array.from({ length: 5 }, (_, i) => `ref${i + 1}`)
      };

      set(state => ({
        messages: [...state.messages, aiMessage]
      }));
    }, 1000);
  },

  uploadPaper: (paper: Paper) => {
    set({ currentPaper: paper });
  },

  clearCurrentPaper: () => {
    set({ currentPaper: null });
  },

  startNewChat: () => {
    set({
      messages: [
        {
          id: '1',
          type: 'ai',
          content: '欢迎使用文献AI，让我们开始探索学术研究的精彩世界。',
          timestamp: new Date().toISOString(),
          references: []
        }
      ],
      currentPaper: null
    });
  },

  getMessageReferences: (messageId: string) => {
    const state = get();
    const message = state.messages.find(m => m.id === messageId);
    if (!message?.references) return [];
    return message.references.map(refId =>
      state.references.find(ref => ref.id === refId)
    ).filter((ref): ref is Reference => ref !== undefined);
  },

  getPreviousMessage: (messageId: string) => {
    const state = get();
    const currentIndex = state.messages.findIndex(m => m.id === messageId);
    return currentIndex > 0 ? state.messages[currentIndex - 1] : null;
  },

  getNextMessage: (messageId: string) => {
    const state = get();
    const currentIndex = state.messages.findIndex(m => m.id === messageId);
    return currentIndex < state.messages.length - 1 ? state.messages[currentIndex + 1] : null;
  },

  deleteMessage: (messageId: string) => {
    set(state => ({
      messages: state.messages.filter(m => m.id !== messageId)
    }));
  },

  renameMessage: (messageId: string, newTitle: string) => {
    set(state => ({
      messages: state.messages.map(m =>
        m.id === messageId ? { ...m, title: newTitle } : m
      )
    }));
  },

  deleteMessages: (messageIds: string[]) => {
    set(state => ({
      messages: state.messages.filter(m => !messageIds.includes(m.id))
    }));
  },

  interpretReference: async (reference: Reference) => {
    const content = `帮我解读这篇文献：${reference.title}`;
    await get().sendMessage(content);
  },

  saveToLibrary: (reference: Reference) => {
    // 实现保存到文献库的逻辑
    console.log('Save to library:', reference);
    // 这里可以显示一个 toast 提示
  },

  saveToLibraryBatch: (references: Reference[]) => {
    // 实现批量保存到文献库的逻辑
    console.log('Batch save to library:', references);
    // 这里可以显示一个 toast 提示
  }
}));
