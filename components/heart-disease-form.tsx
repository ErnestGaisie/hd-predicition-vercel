'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Slider } from '@/components/ui/slider'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { InfoIcon } from 'lucide-react'

const ageGroups = [
  '18-24', '25-29', '30-34', '35-39', '40-44', '45-49',
  '50-54', '55-59', '60-64', '65-69', '70-74', '75+'
]

interface FormData {
  HadAngina: number;
  GeneralHealth: number;
  HadStroke: number;
  AgeCategory: number;
  ChestScan: number;
  DifficultyWalking: number;
  HadDiabetes: number;
}

interface PredictionResult {
  prediction_probability: number;
  decision_tree_explanation: number;
  insights: Array<{
    feature: string;
    contribution: number;
    impact: 'positive' | 'negative';
  }>;
}

export default function HeartDiseaseForm({ onPredictionResult }: { onPredictionResult: (result: PredictionResult) => void }) {
  const [formData, setFormData] = useState<FormData>({
    HadAngina: 0,
    GeneralHealth: 3,
    HadStroke: 0,
    AgeCategory: 1,
    ChestScan: 0,
    DifficultyWalking: 0,
    HadDiabetes: 0
  })

  const handleChange = (name: keyof FormData, value: string | number) => {
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'GeneralHealth' ? value : value === 'yes' ? 1 : 0 
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const apiUrl = 'https://heart-disease-prediction-4-lzr7.onrender.com/predict'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const result: PredictionResult = await response.json()
      console.log('Prediction result:', result)
      onPredictionResult(result)
    } catch (error) {
      console.error('Error:', error)
      // TODO: Show error message to user
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-card text-card-foreground p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Heart Disease Risk Assessment</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="HadAngina" className="flex items-center">
            Have you ever experienced chest pain (angina)?
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="ml-2 h-4 w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Angina is chest pain or discomfort caused when your heart muscle doesn't get enough oxygen-rich blood.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <Select onValueChange={(value) => handleChange('HadAngina', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="GeneralHealth">How would you rate your general health?</Label>
          <Slider
            min={1}
            max={5}
            step={1}
            value={[formData.GeneralHealth]}
            onValueChange={(value) => handleChange('GeneralHealth', value[0])}
            className="my-4"
          />
          <div className="flex justify-between text-sm">
            <span>Poor</span>
            <span>Fair</span>
            <span>Good</span>
            <span>Very Good</span>
            <span>Excellent</span>
          </div>
        </div>

        <div>
          <Label htmlFor="HadStroke" className="flex items-center">
            Have you ever been diagnosed with a stroke?
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="ml-2 h-4 w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>A stroke occurs when blood supply to part of your brain is interrupted or reduced.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <Select onValueChange={(value) => handleChange('HadStroke', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="AgeCategory">What is your age group?</Label>
          <Select onValueChange={(value) => handleChange('AgeCategory', ageGroups.indexOf(value) + 1)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an age group" />
            </SelectTrigger>
            <SelectContent>
              {ageGroups.map((group) => (
                <SelectItem key={group} value={group}>{group}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="ChestScan">Have you ever undergone a chest scan?</Label>
          <Select onValueChange={(value) => handleChange('ChestScan', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="DifficultyWalking">Do you experience difficulty walking?</Label>
          <Select onValueChange={(value) => handleChange('DifficultyWalking', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="HadDiabetes">Have you been diagnosed with diabetes?</Label>
          <Select onValueChange={(value) => handleChange('HadDiabetes', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button type="submit" className="w-full">Submit</Button>
    </motion.form>
  )
}

