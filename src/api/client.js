import { mockUser, mockQuestions, mockSession } from './mockData.js'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function loginUser(email, password) {
  await delay(500)
  return { token: 'mock-token', user: mockUser }
}

export async function registerUser(email, password) {
  await delay(500)
  return { token: 'mock-token', user: mockUser }
}

export async function getQuestionCount(type, difficulty) {
  await delay(500)
  return { count: 5 }
}

export async function createSession(type, difficulty) {
  await delay(500)
  const questions = mockQuestions.filter(
    (q) => q.type === type && q.difficulty === difficulty
  )
  return { sessionId: '1', questions }
}

export async function submitSession(sessionId, answers) {
  await delay(500)
  return { score: 72 }
}

export async function getSession(sessionId) {
  await delay(500)
  return mockSession
}

export async function getHistory() {
  await delay(500)
  return [mockSession]
}
