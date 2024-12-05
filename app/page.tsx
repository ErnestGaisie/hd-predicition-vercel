'use client'

import { useState } from 'react'
import HeartDiseaseForm from '@/components/heart-disease-form'
import ResultVisualization from '@/components/result-visualization'
import Recommendations from '@/components/recommendations'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'

interface PredictionResult {
  prediction_probability: number;
  decision_tree_explanation: number;
  insights: Array<{
    feature: string;
    contribution: number;
    impact: 'positive' | 'negative';
  }>;
}

export default function Home() {
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);

  const handlePredictionResult = (result: PredictionResult) => {
    setPredictionResult(result);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <nav className="bg-primary text-primary-foreground p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Heart Disease Predictor</h1>
            <div className="flex items-center space-x-4">
              <button 
                className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
                onClick={() => setPredictionResult(null)}
              >
                Reset Form
              </button>
              <ModeToggle />
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4 space-y-8">
          <HeartDiseaseForm onPredictionResult={handlePredictionResult} />
          {predictionResult && <ResultVisualization predictionResult={predictionResult} />}
          <Recommendations />
        </main>
      </div>
    </ThemeProvider>
  )
}

