# CloudFit Interview

## Demo Application
<img src="demo-apps.gif" alt="Demo Animation" style="width:100%; height:auto;">


## Inspiration
This project is inspired by a design I came across on Dribbble. The shot that sparked the idea for this project can be viewed here:

[Event Mobile App by Ananto Nugroho Putra for Korsa](https://dribbble.com/shots/22751656-Mucicy-Event-Mobile-App)

## Project Overview
The project aims to recreate a similar event mobile app with a focus on event discovery, user engagement, and a streamlined experience. While I've drawn inspiration from the Dribbble shot, please note that there are some changes made in the final product due to limitations in resources. This includes the absence of exact assets, some design tweaks, and adjustments to align with the functionality and UI.

## Technologies Used
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/IKHSRF/cloudfit_interview.git
2. Navigate to the project directory:

   ```bash
   cd cloudfit-interview
3. Install the dependencies:

   ```bash
   npm install
4. Start the Expo development server:

   ```bash
   npm start

## Approach and Animation Details
The app includes several animations, with a focus on enhancing the user experience. Here’s an overview of the key animations used:

- Tap to Expand Animation: When the user taps on an event, the event card expands to display more details. This is achieved using react-native-reanimated for smooth transitions and scaling effects.

- Modal Animation: Due to challenges with shared element transitions (which couldn’t be achieved using libraries like react-native-shared-element, react-navigation-shared-element, and custom solutions), I opted to use a modal for event details. The modal appears with a fade-in effect, and the content inside the modal scales up for a smooth transition.
  
## Thought Process and Design Choices
- Understanding the Requirements: The goal was to create a smooth and visually engaging experience for users interacting with event cards. I wanted to implement animations that enhance usability without being overly distracting.
  
- Research and Exploration: I reviewed different animation libraries (react-native-reanimated, react-native-shared-element, and react-navigation-shared-element) to determine the best approach for implementing shared element transitions.
  
- Fallback and Decision: Despite my attempts, shared element transitions were not functioning due to compatibility issues with the latest React versions and Expo. Instead of compromising the experience, I opted to use modals for a clean and functional fallback solution.

## Steps to Implement and Optimize Animations
1.	Card Tap Animation (Tap to Expand):
    - Used react-native-reanimated for the animation effects when a user taps an event card.
    - Implemented scaling and opacity changes to provide a smooth visual transition, making the interaction feel responsive.
2.	Modal Transition:
    - Used the default React Native `Modal` component for simplicity and seamless integration.
3.	Optimization:
    - Minimized animation frame drops by using useSharedValue and withTiming in react-native-reanimated.
    - Avoided heavy operations during animations to maintain high performance, especially on lower-end devices.
    - Implemented interactive gestures using `FlingGestureHandler` for smooth swipe-based interactions on the `EventCard`.
    - Used `Animated.View` to add responsiveness and subtle motion effects, enhancing the overall user experience.

## Challenges Faced
- Shared Element Transitions: Despite trying multiple libraries such as react-native-shared-element and react-navigation-shared-element, the shared element transition feature did not work as expected. I faced issues with animation stuttering and unsatisfactory results. After researching online, I found that the shared element functionality is currently not compatible with the latest versions of React Native and Reanimated. Specifically, I came across an issue report on GitHub ([react-native-reanimated/issues/6630](https://github.com/software-mansion/react-native-reanimated/issues/6630)) that mentions the problem with the latest React versions.

- Expo Go Compatibility: Additionally, I discovered that shared element transitions do not work with Expo Go versions 50+ as mentioned in this Stack Overflow thread ([sharedtransitiontag-not-working-react-native-reanimated-3-expo-51](https://stackoverflow.com/questions/78810834/sharedtransitiontag-not-working-react-native-reanimated-3-expo-51)). I attempted to resolve this issue by building a development build, but the issue persisted. Given that the project requirement specified using Expo, I was unable to switch to the bare workflow, so I decided to implement a modal as a functional workaround.

- Modal Implementation: As a workaround, I implemented a modal that expands upon tapping the event card. The modal provides a clean and functional solution, though it deviates from the original design that relied on shared element transitions.

## Conclusion

While there were challenges in implementing shared element transitions, the use of Expo, React Native, and custom modal animations allowed me to recreate the event app with smooth interactions and a visually appealing interface.