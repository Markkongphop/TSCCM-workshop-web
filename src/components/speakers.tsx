import { Box, Container, Heading, Text, Stack, Image } from '@chakra-ui/react'
import React, { useEffect, useState, useRef } from 'react'

const speakers = [
  {
    name: 'Anupol Panitchote, MD',
    title:
      'Division of Critical Care, Department of Medicine, Faculty of Medicine, Khon Kaen University, Khon Kaen, Thailand',
    descriptions: [
      'Deputy Dean of Artificial intelligence and data science',
      'Associate Professor and intensivist at the Division of Critical Care, Department of Medicine, Research interest: data science, AI, health informatics, critical care medicine',
      'Research interest: data science, AI, health informatics, critical care medicine',
    ],
    imageSrc: '/static/Panitchote.avif',
  },
  {
    name: 'Tanuwong Viarasilpa, MD',
    title:
      'Division of Critical Care, Department of Medicine, Siriraj Hospital, Mahidol University, Bangkok, Thailand',
    descriptions: [
      'Instructor and intensivist at the Division of Critical Care, Department of Medicine, Siriraj Hospital, Mahidol University, Bangkok, Thailand',
      'Special interest in neurocritical care',
    ],
    imageSrc: '/static/Viarasilpa.avif',
  },
  {
    name: 'Sitthichok Chaichulee, PhD',
    title:
      'Department of Biomedical Sciences and Biomedical Engineering, Faculty of Medicine, Prince of Songkla University, Thailand',
    descriptions: [
      'Deputy Director of Digital Innovation and Data Analytics',
      'Research interests: Artificial Intelligence, Medical Image Processing, Big Data Analysis, Health Informatics, Interoperability in Healthcare',
    ],
    imageSrc: '/static/Chaichulee.avif',
  },
  {
    name: 'Preut Assawaworrarit, MD',
    title:
      'Division of Critical Care, Department of Medicine, Faculty of Medicine, Chulalongkorn University, Bangkok, Thailand',
    descriptions: [
      'Lecturer and intensivist',
      'Research interests: Critical care medicine, medical informatics',
    ],
    imageSrc: '/static/Assawaworrarit.avif',
  },
  {
    name: 'Evelyn Goh',
    title: 'PhD Researcher in AI and Biomedical Engineering, National University of Singapore',
    descriptions: [
      'Specializing in AI applications for public health and clinical usage.',
      'Bridging deep learning, epidemiology, and clinical translation across Southeast Asia.',
    ],
    imageSrc: '/static/Goh.jpg',
  },
  {
    name: 'Assoc. Prof. Mengling Feng',
    title:
      'Director of AI for Public Health (AI4PH) Program, National University of Singapore (NUS)',
    descriptions: [
      'Leads AI4PH and B.MAD domains at NUS, focusing on healthcare AI research and innovation',
      'Published nearly 200 papers with 13,000+ citations in top-tier journals and conferences',
      'Secured over SGD 10M in funding; organizes annual Singapore Healthcare AI Datathon',
      "Co-founded FathomX, an AI startup empowering Asian women's health, valued at USD 15M",
    ],
    imageSrc: '/static/Feng.webp',
  },
  {
    name: 'Thomas Sounack',
    title: 'AI/ML Scientist, The Dana-Farber Cancer Institute',
    descriptions: [
      'Leads research at the intersection of machine learning and clinical medicine',
      'Focuses on Natural Language Processing, and biomedical representation learning, with applications in electronic health record analysis and clinical decision support.',
      'Worked on computer vision for chest X-ray analysis at the Stanford Center for Artificial Intelligence in Medicine and Imaging (AIMI), developing deep learning models for disease detection and clinical report generation.',
    ],
    imageSrc: '/static/Thomas.jpg',
  },
  {
    name: 'Han-Jay Shu',
    title: 'B.S. in Electrical Engineering and Computer Science, National Tsing Hua University',
    descriptions: [
      'Specialty: Medical AI, Fairness & Interpretability in Healthcare',
      'Areas of Interest: Chest X-ray AI, Bias Detection',
      'Unveiling Hidden Shortcuts: Examining the Impact of Exposure Parameters in Chest Radiography on AI Models, The 110th Scientific Assembly and Annual Meeting of Radiological Society of North America (RSNA 2024)), Oral paper, Chicago, USA, Dec 1-Dec 5, 2024',
      'Predicting Pulmonary Function from Chest X-Rays Using Deep Learning: A DenseNet Approach to Estimating FEV1/FVC Z-Scores," IEEE I2MTC 2025, Chemnitz, Germany, May 19-22, 2025.',
    ],
    imageSrc: '/static/hanjay.webp',
  },
  {
    name: 'Leo Anthony Celi',

    title: 'Senior Scientist and Clinical Director at MIT Laboratory for Computational Physiology',
    descriptions: [
      'Directs all the interdisciplinary clinical research of the lab and mentors many young clinicians who collaborate with the core engineering staff on research projects.',
      'Working on a data-driven decision support system known as Collective Experience',
      'Research interest : Data mining and the application of machine learning on large databases.',
    ],
    imageSrc: '/static/leo.jpg',
  },
]

const Speaker = ({
  name,
  title,
  descriptions,
  imageSrc,
}: {
  name: string
  title: string
  descriptions: string[]
  imageSrc: string
}) => (
  <Box textAlign="center">
    <Box mx="auto" w="200px" h="200px" borderRadius="full" overflow="hidden" mb={4} boxShadow="lg">
      <Image src={imageSrc} alt={name} objectFit="cover" w="100%" h="100%" />
    </Box>
    <Heading size="md" mb={2} color="brand.500">
      {name}
    </Heading>
    <Text color="gray.600" fontWeight="medium" mb={2}>
      {title}
    </Text>
    <Box
      as="ul"
      pl={6}
      color="gray.500"
      fontSize="sm"
      textAlign="left"
      mb={2}
      listStyleType="disc"
      listStylePosition="outside"
    >
      {descriptions.map((desc, index) => (
        <Box as="li" key={index} mb={1}>
          {desc}
        </Box>
      ))}
    </Box>
  </Box>
)

export const Speakers = () => {
  //Add scroll in horizontal
  const [scrollProgress, setScrollProgress] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        const maxScroll = scrollWidth - clientWidth
        const scrollPercent = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0
        setScrollProgress(scrollPercent)
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box py={16} bg="white">
      <Container maxW="container.xl">
        <Stack gap={12}>
          <Heading textAlign="center" size="3xl" color="brand.500">
            Featured Speakers
          </Heading>
          <Text textAlign="center" color="gray.600" maxW="xl" mx="auto">
            Explore diverse experiences and transformative stories that will shape help you
            understand the status of smart intensive care and the future of human-AI system in
            Thailand healthcare ecosystem.
          </Text>

          {/* Scroll Bar*/}
          <Box ref={scrollContainerRef} overflowX="auto" overflowY="hidden">
            <Box display="flex" gap={10} pb={4} minWidth="max-content">
              {speakers.map((speaker) => (
                <Box key={speaker.name} minWidth="300px" maxWidth="300px" flexShrink={0}>
                  <Speaker {...speaker} />
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            maxWidth="400px"
            mx="auto"
            mt={8}
            height="4px"
            bg="gray.200"
            borderRadius="full"
            overflow="hidden"
          >
            <Box
              height="100%"
              bg="gray.500"
              borderRadius="full"
              width={`${scrollProgress}%`}
              transition="width 0.2s"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
