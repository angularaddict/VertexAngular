import { Component } from '@angular/core';

@Component({
  selector: 'app-indweserve',
  templateUrl: './indweserve.component.html',
  styleUrls: ['./indweserve.component.css'],
})
export class IndweserveComponent {
  selectedIndustry: string | null = null;
  tiltStrength = 30;

  industryDescriptions: { [key: string]: string } = {
    'Artificial Intelligence': '',
    Healthcare:
      'Experience the compassionate embrace of technology in the world of healthcare. Witness the fusion of science and empathy as we strive to heal, care, and innovate, redefining the very essence of well-being.',
    Bootcamp:
      "Ignite your passion for technology with an immersive journey through the realms of IT. Our boot camp is not just a training ground; it's a transformative experience, sculpting individuals into tech-savvy trailblazers.",
    Gaming:
      "Immerse yourself in a symphony of pixels and narratives, where every click, every move, is a step into an alternate universe. Our gaming world is not just entertainment; it's an odyssey of excitement, strategy, and limitless adventures.",
    Finance:
      'Navigate the intricate tapestry of numbers and strategies that shape the economic landscape. Join us in the world of finance, where precision meets foresight, and each calculation paves the way for a more prosperous tomorrow.',
    Retail:
      'Step into a world where shopping transcends mere transactions; it becomes an experience. Our retail journey is a celebration of innovation, transforming ordinary moments into extraordinary memories as we redefine the future of commerce.',
    Robotics:
      'Explore the frontier of automation, where machines become nimble extensions of human potential. In the realm of robotics, we craft a future where efficiency meets elegance, and innovation unfolds in the graceful dance of mechanical wonders.',
    Research:
      "Embark on a voyage of discovery as we unravel the mysteries of tomorrow. In the sphere of research and development, we nurture ideas, cultivate curiosity, and pioneer innovations that transcend the boundaries of what's possible.",
  };

  isSelected(industry: string): boolean {
    return this.selectedIndustry === industry;
  }

  ngOnInit() {
    const industryKeys = this.getIndustryKeys();
    if (industryKeys.length > 0) {
      this.selectedIndustry = industryKeys[0];
    }
  }

  showDescription(industry: string) {
    this.selectedIndustry = industry;
  }
  getIndustryKeys(): string[] {
    return Object.keys(this.industryDescriptions);
  }

  tiltCard(event: MouseEvent, card: HTMLElement): void {
    const { offsetX, offsetY, target } = event;
    const { clientWidth, clientHeight } = target as HTMLElement;

    const xPos = ((offsetX / clientWidth - 0.5) * this.tiltStrength).toFixed(2);
    const yPos = ((offsetY / clientHeight - 0.5) * this.tiltStrength).toFixed(2);

    card.style.transform = `perspective(1000px) rotateX(${yPos}deg) rotateY(${xPos}deg)`;
  }

  resetTilt(card: HTMLElement): void {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  }
}
