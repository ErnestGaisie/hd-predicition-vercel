'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, ThumbsUp } from 'lucide-react'

const insights = [
  { factor: 'Age', impact: 'negative', description: 'Higher risk due to age group' },
  { factor: 'General Health', impact: 'positive', description: 'Good overall health is beneficial' },
  { factor: 'Chest Pain', impact: 'negative', description: 'Experiencing chest pain increases risk' },
  { factor: 'Diabetes', impact: 'negative', description: 'Diabetes is a risk factor for heart disease' },
  { factor: 'Physical Activity', impact: 'positive', description: 'Regular exercise lowers risk' },
]

export default function Insights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Top Contributing Factors</h2>
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
              <h3 className="font-semibold">{insight.factor}</h3>
              <p className="text-sm">{insight.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

