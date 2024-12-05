'use client'

import { motion } from 'framer-motion'
import { Heart, Utensils, Activity, Cigarette, Stethoscope } from 'lucide-react'

const recommendations = [
  { icon: Heart, text: 'Monitor your blood pressure regularly' },
  { icon: Utensils, text: 'Maintain a healthy, balanced diet' },
  { icon: Activity, text: 'Engage in regular physical activity' },
  { icon: Cigarette, text: 'Quit smoking or avoid secondhand smoke' },
  { icon: Stethoscope, text: 'Schedule regular check-ups with your doctor' },
]

export default function Recommendations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((rec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center p-4 bg-secondary rounded-md"
          >
            <rec.icon className="h-8 w-8 text-primary mr-3" />
            <p>{rec.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

