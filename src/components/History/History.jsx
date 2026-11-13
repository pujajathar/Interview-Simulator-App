import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getHistory } from '../../api/client.js'
import './History.css'

export default function History() {
  const navigate = useNavigate()
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadHistory = async () => {
    setLoading(true)
    setError('')
    try {
      const data = await getHistory()
      setSessions(data)
    } catch {
      setError('Failed to load history. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadHistory()
  }, [])

  if (loading) {
    return <div className="history"><p className="history__loading">Loading history…</p></div>
  }

  if (error) {
    return (
      <div className="history">
        <p className="history__error">{error}</p>
        <button className="history__retry-btn" onClick={loadHistory}>Retry</button>
      </div>
    )
  }

  return (
    <div className="history">
      <h1 className="history__title">Interview History</h1>

      {sessions.length === 0 ? (
        <div className="history__empty">
          <p>No interviews yet.</p>
          <button className="history__start-link" onClick={() => navigate('/interview-setup')}>
            Start your first interview
          </button>
        </div>
      ) : (
        <ul className="history__list">
          {sessions.map((session) => (
            <li
              key={session.sessionId}
              className="history__item"
              onClick={() => navigate(`/results/${session.sessionId}`)}
            >
              <div className="history__item-info">
                <span className="history__item-type">{session.type}</span>
                <span className="history__item-difficulty">{session.difficulty}</span>
              </div>
              <div className="history__item-right">
                <span className="history__item-score">{session.score}/100</span>
                <span className="history__item-date">{session.completedAt}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
