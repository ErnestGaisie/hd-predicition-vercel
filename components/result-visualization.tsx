'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { AlertTriangle, ThumbsUp } from 'lucide-react'

interface PredictionResult {
  prediction_probability: number;
  decision_tree_explanation: number;
  insights: Array<{
    feature: string;
    contribution: number;
    impact: 'positive' | 'negative';
  }>;
}

export default function ResultVisualization({ predictionResult }: { predictionResult: PredictionResult | null }) {
  if (!predictionResult) return null;

  const { prediction_probability, insights } = predictionResult;
  const probability = prediction_probability * 100;

  const data = [
    { name: 'Risk', value: probability },
    { name: 'Safe', value: 100 - probability }
  ]

  const COLORS = ['#FF6B6B', '#4ECDC4']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Prediction Result</h2>
      <div className="flex items-center justify-center">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl font-bold"
        >
          {probability.toFixed(2)}%
        </motion.div>
      </div>
      <p className="text-center mt-4">
        Based on the provided information, your estimated risk of heart disease is {probability.toFixed(2)}%.
      </p>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Top Contributing Factors</h3>
        <ul className="space-y-4">
          {insights.map((insight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center p-3 rounded-md ${
                insight.impact === 'positive' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
              }`}
            >
              {insight.impact === 'positive' ? (
                <ThumbsUp className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              ) : (
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3" />
              )}
              <div>
                <h4 className="font-semibold">{insight.feature}</h4>
                <p className="text-sm">Contribution: {insight.contribution.toFixed(3)}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

