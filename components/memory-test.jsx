'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, Share2 } from 'lucide-react';


const ScoreAnimation = ({ score, position }) => (
    <div
      className="fixed text-green-500 font-bold text-2xl animate-bounce-up z-50"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        pointerEvents: 'none',  // 클릭 이벤트가 아래 요소로 전달되도록
      }}
    >
      +{score}
    </div>
  );

const GameOverEffect = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 animate-fade-in flex items-center justify-center z-50">
    <div className="text-white text-4xl font-bold animate-scale-in">
      Game Over!
    </div>
  </div>
);

const MemoryTest = () => {
  const [grid, setGrid] = useState([]);
  const [showNumbers, setShowNumbers] = useState(false);
  const [userSequence, setUserSequence] = useState([]);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('tutorial'); // 'tutorial', 'ready', 'memorize', 'recall', 'finished'
  const [feedback, setFeedback] = useState({});
  const [scoreAnimations, setScoreAnimations] = useState([]);
  const [showGameOver, setShowGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);
  
  const Tutorial = ({ onStart }) => (
    <div className="space-y-4 text-center">
      <h2 className="text-xl font-bold">기억력 게임 - 숫자 순서 맞추기</h2>
      
      <div className="bg-blue-50 p-4 rounded-lg text-left space-y-3">
        <p className="font-medium">게임 방법:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>화면에 잠시 숫자들이 표시됩니다.</li>
          <li>숫자가 사라진 후, <span className="font-semibold text-blue-600">작은 숫자부터 큰 숫자 순서대로</span> 클릭하세요.</li>
          <li>레벨이 올라갈수록 더 많은 숫자를 기억해야 합니다.</li>
          <li>틀리면 게임 오버!</li>
        </ol>
      </div>
      
      <Button 
        className="w-full py-6 text-lg bg-green-500 hover:bg-green-600"
        onClick={() => onStart()}
      >
        게임 시작하기
      </Button>
    </div>
  );

  useEffect(() => {
    // 로컬 스토리지에서 최고 점수 불러오기
    const savedHighScore = localStorage.getItem('memoryGameHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  const updateHighScore = (newScore) => {
    if (newScore > highScore) {
      setHighScore(newScore);
      localStorage.setItem('memoryGameHighScore', newScore.toString());
    }
  };

  const showScoreAnimation = (points, element) => {
    // 요소가 null이거나, getBoundingClientRect 메서드가 없으면 기본 위치 사용
    let position = {
      top: window.innerHeight / 2 - 50,
      left: window.innerWidth / 2 - 20
    };
    
    // 요소가 유효한 경우에만 위치 계산
    if (element && typeof element.getBoundingClientRect === 'function') {
      const rect = element.getBoundingClientRect();
      position = {
        top: rect.top - 20,
        left: rect.left + (rect.width / 2) - 20,  // 중앙 정렬을 위해 조정
      };
    }
    
    const newAnimation = {
      id: Date.now(),
      score: points,
      position: position,
    };
    
    setScoreAnimations(prev => [...prev, newAnimation]);
    
    setTimeout(() => {
      setScoreAnimations(prev => prev.filter(anim => anim.id !== newAnimation.id));
    }, 1000);
  };

  // 공유 기능
  const shareScore = async () => {
    const shareText = `🎮 Memory Game Challenge!\n🏆 My Score: ${score}\n🌟 Level Reached: ${level}\nCan you beat my score? 🤔\n`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Memory Game Challenge',
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // 클립보드에 복사
      navigator.clipboard.writeText(shareText + window.location.href);
      alert('Score copied to clipboard!');
    }
  };
  const initializeGrid = () => {
    // 모바일에서는 더 작은 그리드로 시작
    const size = Math.min(3 + Math.floor(level / 3), 4); // 최대 4x4로 제한
    const numbers = Array.from({length: size * size}, (_, i) => i + 1)
      .sort(() => Math.random() - 0.5)
      .slice(0, level + 2);
    
    const newGrid = Array.from({length: size}, () => 
      Array.from({length: size}, () => null)
    );
    
    // 숫자 배치를 더 균등하게 분포
    numbers.forEach((num) => {
      let placed = false;
      while (!placed) {
        const row = Math.floor(Math.random() * size);
        const col = Math.floor(Math.random() * size);
        if (newGrid[row][col] === null) {
          newGrid[row][col] = num;
          placed = true;
        }
      }
    });
    
    setGrid(newGrid);
    setFeedback({}); // 피드백 초기화
  };
  
  const startLevel = () => {
    initializeGrid();
    setShowNumbers(true);
    setGameState('memorize');
    setUserSequence([]);
    
    // 레벨에 따라 시간 조정 (레벨이 올라갈수록 숫자를 외울 시간이 조금씩 증가)
    const memorizeTime = 2000 + (level * 300); // 기본 2초 + 레벨당 0.3초 추가
    
    setTimeout(() => {
      setShowNumbers(false);
      setGameState('recall');
    }, memorizeTime);
  };


  const handleGameOver = () => {
    setShowGameOver(true);
    updateHighScore(score);
    setTimeout(() => {
      setShowGameOver(false);
      setGameState('finished');
    }, 2000);
  };

  const handleCellClick = (row, col, element) => {
    if (gameState !== 'recall') return;
    
    const number = grid[row][col];
    const correctNumbers = grid.flat().filter(n => n !== null).sort((a, b) => a - b);
    const expectedNumber = correctNumbers[userSequence.length];
    
    // 클릭한 셀에 숫자가 없거나, 잘못된 숫자를 클릭한 경우 즉시 게임 오버
    if (number === null || number !== expectedNumber) {
      const newFeedback = {
        ...feedback,
        [`${row}-${col}`]: 'wrong'
      };
      setFeedback(newFeedback);
      handleGameOver();
      return;
    }
    
    // 정답인 경우
    const newFeedback = {
      ...feedback,
      [`${row}-${col}`]: 'correct'
    };
    setFeedback(newFeedback);
    
    const points = level * 100;
    showScoreAnimation(points, element);
    setScore(prev => prev + points);
    
    const newSequence = [...userSequence, number];
    setUserSequence(newSequence);
    
    // 레벨 완료 체크
    if (newSequence.length === correctNumbers.length) {
      setTimeout(() => {
        setLevel(level + 1);
        setGameState('ready');
        setFeedback({});
      }, 1000);
    }
  };

  useEffect(() => {
    // 애니메이션을 위한 CSS 스타일
    const style = document.createElement('style');
    style.textContent = `
      @keyframes success {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
  
      @keyframes success-icon {
        0% { opacity: 0; transform: scale(0.5); }
        100% { opacity: 1; transform: scale(1); }
      }
      
      @keyframes bounce-up {
        0% { transform: translateY(0); opacity: 1; }
        50% { transform: translateY(-30px); opacity: 0.7; }
        100% { transform: translateY(-60px); opacity: 0; }
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
      
      @keyframes scale-in {
        0% { transform: scale(0); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      
      @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
  
      .animate-bounce-up {
        animation: bounce-up 1s ease-out forwards;
      }
      
      .animate-shake {
        animation: shake 0.5s ease-in-out;
      }
      
      .animate-scale-in {
        animation: scale-in 0.5s ease-out;
      }
      
      .animate-fade-in {
        animation: fade-in 0.3s ease-out;
      }
      
      .animate-success {
        animation: success 0.3s ease-out;
      }
      
      .animate-success-icon {
        animation: success-icon 0.3s ease-out;
      }
    `;
    document.head.appendChild(style);
  
    // 컴포넌트 언마운트 시 스타일 제거
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);


  return (
    <Card className="w-full max-w-md mx-auto p-2 sm:p-4 relative overflow-hidden">
      <CardContent className="space-y-4">
        <div className="text-center mb-4 flex justify-between items-center">
          <div>
            <div className="text-2xl font-bold">Level {level}</div>
            <div className="text-xl animate-pulse">Score: {score}</div>
          </div>
          <div>
            <div className="text-sm">High Score</div>
            <div className="text-lg font-bold">{highScore}</div>
          </div>
        </div>

        {/* Score Animations */}
        {scoreAnimations.map(animation => (
          <ScoreAnimation key={animation.id} {...animation} />
        ))}

        {/* Game Grid */}
        <div className="grid gap-2 relative" 
             style={{
               gridTemplateColumns: `repeat(${grid.length}, 1fr)`,
               touchAction: 'manipulation'
             }}>
          {grid.map((row, rowIndex) => (
            row.map((cell, colIndex) => {
              const cellKey = `${rowIndex}-${colIndex}`;
              const feedbackState = feedback[cellKey];
              
              return (
                <button
                  key={cellKey}
                  className={`
                    w-full aspect-square rounded-lg text-2xl font-bold
                    flex items-center justify-center
                    transform transition-all duration-200
                    ${showNumbers && cell !== null ? 'bg-blue-500 text-white scale-105' : 
                      feedbackState === 'correct' ? 'bg-green-500 text-white animate-success' :
                      feedbackState === 'wrong' ? 'bg-red-500 text-white animate-shake' :
                      'bg-gray-200 hover:bg-gray-300 active:bg-gray-400 hover:scale-105'}
                  `}
                  onClick={(e) => handleCellClick(rowIndex, colIndex, e.target)}
                  disabled={gameState !== 'recall' || feedbackState}
                >
                  {showNumbers && cell !== null ? cell : 
                   feedbackState === 'correct' ? (
                     <div className="flex items-center animate-success-icon">
                       {cell}
                       <Check className="ml-1 w-4 h-4"/>
                     </div>
                   ) : 
                   feedbackState === 'wrong' ? (
                     <div className="flex items-center animate-error-icon">
                       {cell}
                       <X className="ml-1 w-4 h-4"/>
                     </div>
                   ) : ''}
                </button>
              );
            })
          ))}
        </div>

        {/* Game Over Effect */}
        {showGameOver && <GameOverEffect />}

        {gameState === 'tutorial' && (
            <Tutorial 
                onStart={() => setGameState('ready')}
            />
        )}

        {/* Game States */}
        {gameState === 'ready' && (
          <Button 
            className="w-full mt-4 py-6 text-lg animate-pulse"
            onClick={startLevel}
          >
            Start Level {level}
          </Button>
        )}

        {gameState === 'memorize' && (
          <div className="text-center text-lg font-bold text-blue-600 animate-bounce">
            Memorize the numbers!
          </div>
        )}

        {gameState === 'finished' && (
          <div className="text-center space-y-4">
            <div className="text-xl mb-4">Final Score: {score}</div>
            <div className="flex gap-2 justify-center">
              <Button 
                className="py-6 text-lg"
                onClick={() => {
                  setLevel(1);
                  setScore(0);
                  setGameState('ready');
                  setFeedback({});
                }}
              >
                Play Again
              </Button>
              <Button
                className="py-6"
                variant="outline"
                onClick={shareScore}
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};


export default MemoryTest;