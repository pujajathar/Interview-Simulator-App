import { useState, useEffect, useRef } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { submitSession } from '../../api/client.js'
import './Interview.css'

export default function Interview() {
  const { sessionId } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()

  const questions = state?.questions || []

  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [validationError, setValidationError] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [elapsed, setElapsed] = useState(0)

  // Timer
  useEffect(() => {
    const interval = setInterval(() => setElapsed(s => s + 1), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0')
    const s = String(seconds % 60).padStart(2, '0')
    return `${m}:${s}`
  }

  const isLastQuestion = currentIndex === questions.length - 1
  const currentQuestion = questions[currentIndex]

  const handleNext = async () => {
    if (!currentAnswer.trim()) {
      setValidationError('Please enter an answer before continuing.')
      return
    }
    setValidationError('')

    const updatedAnswers = [...answers, { position: currentIndex + 1, answer: currentAnswer.trim() }]
    setAnswers(updatedAnswers)

    if (!isLastQuestion) {
      setCurrentIndex(i => i + 1)
      setCurrentAnswer('')
      return
    }

    // Last question — submit
    setSubmitting(true)
    setSubmitError('')
    try {
      await submitSession(sessionId, updatedAnswers)
      navigate(`/results/${sessionId}`)
    } catch {
      setSubmitError('Failed to submit. Please try again.')
      setSubmitting(false)
    }
  }

  if (questions.length === 0) {
    return (
      <div className="interview">
        <p>No questions found. <a href="/interview-setup">Go back</a></p>
      </div>
    )
  }

  return (
    <div className="interview">
      <div className="interview__header">
        <span className="interview__progress">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span className="interview__timer">{formatTime(elapsed)}</span>
      </div>

      <div className="interview__question">
        <p>{currentQuestion.text}</p>
      </div>

      <div className="interview__answer">
        <textarea
          className="interview__textarea"
          value={currentAnswer}
          onChange={e => {
            setCurrentAnswer(e.target.value)
            if (validationError) setValidationError('')
          }}
          placeholder="Type your answer here…"
          maxLength={2000}
        />
        <span className="interview__char-count">{currentAnswer.length} / 2000</span>
      </div>

      {validationError && (
        <p className="interview__error">{validationError}</p>
      )}
      {submitError && (
        <p className="interview__error">{submitError}</p>
      )}

      <button
        className="interview__btn"
        onClick={handleNext}
        disabled={submitting}
      >
        {submitting ? 'Submitting…' : isLastQuestion ? 'Submit' : 'Next'}
      </button>
    </div>
  )
}
