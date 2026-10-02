export const mockUser = {
  id: 1,
  email: 'demo@example.com',
}

// 4 types × 3 difficulties × 5 questions = 60 questions total
const types = ['behavioral', 'technical', 'frontend', 'java']
const difficulties = ['beginner', 'intermediate', 'advanced']

const questionTemplates = {
  behavioral: {
    beginner: [
      'Tell me about a time you worked in a team.',
      'Describe a situation where you had to meet a deadline.',
      'Give an example of a goal you set and how you achieved it.',
      'Tell me about a time you received constructive feedback.',
      'Describe a time you helped a colleague.',
    ],
    intermediate: [
      'Tell me about a conflict you resolved with a coworker.',
      'Describe a project where you had to adapt to unexpected changes.',
      'Give an example of how you prioritised competing tasks.',
      'Tell me about a time you failed and what you learned.',
      'Describe a situation where you had to influence someone without authority.',
    ],
    advanced: [
      'Tell me about a time you led a cross-functional initiative.',
      'Describe how you drove a culture change in your team.',
      'Give an example of a strategic decision you made with incomplete data.',
      'Tell me about a time you mentored a junior engineer through a difficult problem.',
      'Describe a situation where you had to balance technical debt against delivery speed.',
    ],
  },
  technical: {
    beginner: [
      'What is the difference between a stack and a queue?',
      'Explain what Big-O notation means.',
      'What is a linked list and when would you use one?',
      'What does it mean for an algorithm to be O(n log n)?',
      'What is the difference between a process and a thread?',
    ],
    intermediate: [
      'Explain how a hash map works internally.',
      'What is the difference between breadth-first and depth-first search?',
      'Describe how you would design a URL shortener.',
      'What is a binary search tree and what are its time complexities?',
      'Explain the CAP theorem in distributed systems.',
    ],
    advanced: [
      'How would you design a distributed rate limiter?',
      'Explain the differences between eventual consistency and strong consistency.',
      'Describe how you would implement a distributed lock.',
      'How does a log-structured merge tree (LSM-tree) work?',
      'Design a real-time collaborative document editing system.',
    ],
  },
  frontend: {
    beginner: [
      'What is the difference between CSS Flexbox and CSS Grid?',
      'Explain the difference between == and === in JavaScript.',
      'What is the DOM and how do you interact with it?',
      'What is the difference between let, const, and var?',
      'What does semantic HTML mean and why does it matter?',
    ],
    intermediate: [
      'Explain how the JavaScript event loop works.',
      'What is the difference between controlled and uncontrolled components in React?',
      'Describe how CSS specificity is calculated.',
      'What is a closure and give a practical example?',
      'How does React reconciliation (the virtual DOM diffing) work?',
    ],
    advanced: [
      'How would you optimise the performance of a large React application?',
      'Explain micro-frontend architecture and its trade-offs.',
      'Describe how you would implement code splitting and lazy loading.',
      'What are Web Workers and when should you use them?',
      'Explain how server-side rendering differs from static site generation and when to use each.',
    ],
  },
  java: {
    beginner: [
      'What is the difference between an interface and an abstract class in Java?',
      'Explain the four pillars of object-oriented programming.',
      'What is the difference between ArrayList and LinkedList?',
      'What does the final keyword mean in Java?',
      'What is Spring Boot and what problem does it solve?',
    ],
    intermediate: [
      'Explain how Spring dependency injection works.',
      'What is the difference between @Component, @Service, and @Repository?',
      'How does Java garbage collection work?',
      'What is the difference between checked and unchecked exceptions?',
      'Explain the Spring MVC request lifecycle.',
    ],
    advanced: [
      'How would you design a microservices architecture with Spring Boot?',
      'Explain how Java virtual threads (Project Loom) improve concurrency.',
      'Describe how you would handle distributed transactions in a Spring microservices system.',
      'What are the trade-offs of using an ORM like Hibernate vs writing raw SQL?',
      'How does the Spring Security filter chain work?',
    ],
  },
}

let idCounter = 1
export const mockQuestions = []

for (const type of types) {
  for (const difficulty of difficulties) {
    const texts = questionTemplates[type][difficulty]
    for (let i = 0; i < 5; i++) {
      mockQuestions.push({
        id: idCounter++,
        type,
        difficulty,
        text: texts[i],
        keywords: [],
      })
    }
  }
}

export const mockSession = {
  sessionId: '1',
  type: 'frontend',
  difficulty: 'beginner',
  score: 72,
  completedAt: '2025-01-15 14:30',
  questions: [
    {
      position: 1,
      questionText: 'What is the difference between CSS Flexbox and CSS Grid?',
      answer:
        'Flexbox is one-dimensional and works along a single axis, while Grid is two-dimensional and lets you control both rows and columns simultaneously.',
      feedback:
        'Good — also consider: mentioning when to choose one over the other depending on the layout need.',
      score: 75,
    },
    {
      position: 2,
      questionText: 'Explain the difference between == and === in JavaScript.',
      answer:
        '== performs type coercion before comparing, so "5" == 5 is true. === checks both value and type strictly, so "5" === 5 is false.',
      feedback: 'Strong answer.',
      score: 90,
    },
    {
      position: 3,
      questionText: 'What is the DOM and how do you interact with it?',
      answer:
        'The DOM is the browser\'s in-memory representation of the HTML document as a tree. You interact with it using JavaScript APIs like document.querySelector or addEventListener.',
      feedback: 'Strong answer.',
      score: 85,
    },
    {
      position: 4,
      questionText: 'What is the difference between let, const, and var?',
      answer:
        'var is function-scoped and hoisted. let and const are block-scoped. const prevents reassignment but does not make objects immutable.',
      feedback: 'Strong answer.',
      score: 80,
    },
    {
      position: 5,
      questionText: 'What does semantic HTML mean and why does it matter?',
      answer:
        'Semantic HTML uses tags that convey meaning, like <article> or <nav>, rather than generic divs. It improves accessibility and SEO.',
      feedback:
        'Good — also consider: mentioning assistive technology benefits in more detail.',
      score: 68,
    },
  ],
}
