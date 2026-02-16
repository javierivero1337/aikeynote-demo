export type DeckVariant = "default" | "client1";

export interface SlideProps {
  isActive: boolean;
  variant?: DeckVariant;
  onNext?: () => void;
  onPrev?: () => void;
}

export interface DeckContextType {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}
