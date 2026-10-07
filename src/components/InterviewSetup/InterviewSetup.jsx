import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createSession, getQuestionCount } from "../../api/client";
import "./InterviewSetup.css";

    const TYPES = [
        { label: 'Behavioral', value: 'behavioral' },
        { label: 'Technical', value: "technical" },
        { label: 'Frontend', value: 'frontend' },
        { label: 'Java/Spring Boot', value: "java" }
    ];
    
    const DIFFICULTIES = [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate'},
        { label: 'Advanced', value: 'advanced'}
    ];

    function InterviewSetup() {

        const [searchParams] = useSearchParams();
        const navigate = useNavigate();
        const [selectedType, setSelectedType]= useState(searchParams.get('type') || '');
        const [selectedDifficulty, setSelectedDifficulty] = useState('');
        const [questionCount, setQuestionCount] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState('');

        const bothSelected = selectedType && selectedDifficulty;

        //fetch question count when both are selected
        useEffect(() => {
            if(!bothSelected) {
                setQuestionCount(null);
            }
            let cancelled = false;
            getQuestionCount(selectedType, selectedDifficulty).then(({ count }) => {
                if(!cancelled) setQuestionCount(count);
            })
            return () => { cancelled = true }
        }, [selectedType, selectedDifficulty, bothSelected]);

        const handleStart = async () => {
            if(!bothSelected) return 
            setError('');
            setLoading(true);
        try {
        const { sessionId, questions } = await createSession(selectedType, selectedDifficulty)
        navigate(`/interview/${sessionId}`, { state: { questions } })
        } catch {
        setError('Failed to start the session. Please try again.')
        } finally {
        setLoading(false)
        }
    }

    return (
    <div className="setup">
      <h1 className="setup__title">Choose Your Interview</h1>

      <section className="setup__section">
        <h2 className="setup__label">Interview Type</h2>
        <div className="setup__options">
          {TYPES.map(({ label, value }) => (
            <button
              key={value}
              className={`setup__option${selectedType === value ? ' setup__option--active' : ''}`}
              onClick={() => setSelectedType(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="setup__section">
        <h2 className="setup__label">Difficulty</h2>
        <div className="setup__options">
          {DIFFICULTIES.map(({ label, value }) => (
            <button
              key={value}
              className={`setup__option${selectedDifficulty === value ? ' setup__option--active' : ''}`}
              onClick={() => setSelectedDifficulty(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {bothSelected && questionCount !== null && (
        <p className="setup__count">This interview has <strong>{questionCount}</strong> questions</p>
      )}

      {error && <p className="setup__error">{error}</p>}

      <button
        className="setup__start-btn"
        onClick={handleStart}
        disabled={!bothSelected || loading}
      >
        {loading ? 'Starting…' : 'Start Interview'}
      </button>
    </div>
  )
}

   
export default InterviewSetup;