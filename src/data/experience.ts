export interface ExperienceRole {
  title: string;
  period: string;
  description: string;
}

export interface Experience {
  company: string;
  period: string;
  description: string;
  roles: ExperienceRole[];
}

export const experiences: Experience[] = [
  {
    company: 'USYD Robotics Club',
    period: 'Year - Year',
    description: 'Served as a Technical Subcommittee member, contributing to robotics projects and supporting club activities.',
    roles: [
      {
        title: 'Technical Subcommittee',
        period: 'Year - Year',
        description: 'Participated in the technical subcommittee, assisting with robotics design, development, and club initiatives.'
      }
    ]
  },
  {
    company: 'Sydney Interplanetary Rover Initiative',
    period: 'Year - Year',
    description: 'Worked as an Electrical Engineer, contributing to the design and development of electrical systems for the rover project.',
    roles: [
      {
        title: 'Electrical Engineer',
        period: 'Year - Year',
        description: 'Designed and implemented electrical systems and supported the rover initiative with technical expertise.'
      }
    ]
  },
  {
    company: 'Sydney University Society of Medical Innovation (SUSMI)',
    period: 'Year - Year',
    description: 'Served as a Subcommittee member at SUSMI, contributing to society initiatives and supporting events and projects related to medical innovation.',
    roles: [
      {
        title: 'Subcommittee Member',
        period: 'Year - Year',
        description: 'Actively participated in the subcommittee, assisting with planning, organizing, and executing society activities and events.'
      }
    ]
  },
  {
    company: 'USYD Rocketry Team',
    period: 'Feb 2023 - Jun 2024',
    description: 'Contributed to the USYD Rocketry Team for 1 year and 5 months, actively participating in various subsystems and supporting the team’s mission to design, build, and launch high-powered rockets.',
    roles: [
      {
        title: 'Spear Lily Engineer',
        period: 'Feb 2023 - May 2023',
        description: 'Worked as a Spear Lily Engineer for 4 months, focusing on subsystem development and hands-on engineering tasks.'
      },
      {
        title: 'Ground Control Engineer',
        period: 'May 2023 - Jun 2024',
        description: 'Transitioned to Ground Control Engineer, responsible for ground support systems, telemetry, and launch operations.'
      }
    ]
  }
];
