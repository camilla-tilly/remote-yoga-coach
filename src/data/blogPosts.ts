import type { BlogPost, BlogLanguage } from './blogTypes';
import howMuchDoesCorporateYogaCost from './posts/how-much-does-corporate-yoga-cost';
import chairYogaAtYourDesk from './posts/chair-yoga-at-your-desk';
import deskYoga5MinuteRoutine from './posts/desk-yoga-5-minute-routine';
import preventBurnoutDistributedTeam from './posts/prevent-burnout-distributed-team';
import breathingExercisesForWorkStress from './posts/breathing-exercises-for-work-stress';
import doWorkplaceWellnessAppsWork from './posts/do-workplace-wellness-apps-work';
import fiveMinuteDeskMeditation from './posts/5-minute-desk-meditation';
import neckAndShoulderStretchesDeskWorkers from './posts/neck-and-shoulder-stretches-desk-workers';
import corporateWellnessIdeasRemoteTeams from './posts/corporate-wellness-ideas-remote-teams';
import corporateMindfulnessSessionsWhatToExpect from './posts/corporate-mindfulness-sessions-what-to-expect';
import teamWellbeingSubscriptionVsWorkshops from './posts/team-wellbeing-subscription-vs-workshops';
import runWellbeingSessionOverTeams from './posts/run-wellbeing-session-over-teams';
import officeYogaForRemoteTeams from './posts/office-yoga-for-remote-teams';
import keepHybridTeamFocused from './posts/keep-hybrid-team-focused';
import howToMeditateAtWork from './posts/how-to-meditate-at-work';
import techNeckExercisesDesk from './posts/tech-neck-exercises-desk';
import buildAStrongRemoteTeam from './posts/build-a-strong-remote-team';
import wellbeingLunchAndLearnIdeas from './posts/wellbeing-lunch-and-learn-ideas';
import managerBurnoutSigns from './posts/manager-burnout-signs';
import calmHeadspaceVsLiveSessions from './posts/calm-headspace-vs-live-sessions';
import employeeWellbeingIdeasSmallBudget from './posts/employee-wellbeing-ideas-small-budget';
import corporateWellbeingForTechTeams from './posts/corporate-wellbeing-for-tech-teams';
import howToStartACorporateWellbeingProgramme from './posts/how-to-start-a-corporate-wellbeing-programme';
import improveTeamMoraleRemoteTeam from './posts/improve-team-morale-remote-team';
import wellbeingInRemoteOnboarding from './posts/wellbeing-in-remote-onboarding';
import meditationBreathingOrChairYogaForYourTeam from './posts/meditation-breathing-or-chair-yoga-for-your-team';
import howToMeasureWellbeingProgrammeRoi from './posts/how-to-measure-wellbeing-programme-roi';

export type { BlogPost, BlogLanguage, BlogContentBlock } from './blogTypes';

// The cost guide leads (featured on the hub); buyer-intent posts follow, then the rest.
export const blogPosts: BlogPost[] = [
  howMuchDoesCorporateYogaCost,
  meditationBreathingOrChairYogaForYourTeam,
  howToMeasureWellbeingProgrammeRoi,
  teamWellbeingSubscriptionVsWorkshops,
  corporateMindfulnessSessionsWhatToExpect,
  runWellbeingSessionOverTeams,
  officeYogaForRemoteTeams,
  keepHybridTeamFocused,
  buildAStrongRemoteTeam,
  corporateWellbeingForTechTeams,
  howToStartACorporateWellbeingProgramme,
  improveTeamMoraleRemoteTeam,
  howToMeditateAtWork,
  techNeckExercisesDesk,
  wellbeingLunchAndLearnIdeas,
  managerBurnoutSigns,
  calmHeadspaceVsLiveSessions,
  employeeWellbeingIdeasSmallBudget,
  preventBurnoutDistributedTeam,
  corporateWellnessIdeasRemoteTeams,
  doWorkplaceWellnessAppsWork,
  chairYogaAtYourDesk,
  deskYoga5MinuteRoutine,
  breathingExercisesForWorkStress,
  fiveMinuteDeskMeditation,
  neckAndShoulderStretchesDeskWorkers,
  wellbeingInRemoteOnboarding,
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);
