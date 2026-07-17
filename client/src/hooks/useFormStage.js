import { useState, useCallback } from 'react';
import { scrollToSection } from '../utils/scrollTo';

export function useFormStage() {
  const [selectedStage, setSelectedStage] = useState('');

  const applyWithStage = useCallback((stageValue) => {
    setSelectedStage(stageValue);
    scrollToSection('apply');
  }, []);

  return { selectedStage, setSelectedStage, applyWithStage };
}
