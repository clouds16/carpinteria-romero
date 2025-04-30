import { 
  Box, 
  Container, 
  Grid, 
  Title, 
  Text, 
  Group, 
  Button, 
  Flex, 
  ActionIcon, 
  useMantineTheme 
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

export default function HeroSection({ scrollToSection }) {
  const theme = useMantineTheme();

  return (
    <Box 
      id="inicio" 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #F8F5F0, #FFFFFF)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Box
          className="animate-blob"
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            width: '18rem',
            height: '18rem',
            borderRadius: '50%',
            backgroundColor: theme.colors.brown[3],
            opacity: 0.2
          }}
        />
        <Box
          className="animate-blob animation-delay-2000"
          style={{
            position: 'absolute',
            top: '5rem',
            right: '13rem',
            width: '18rem',
            height: '18rem',
            borderRadius: '50%',
            backgroundColor: theme.colors.yellow[3],
            opacity: 0.2
          }}
        />
        <Box
          className="animate-blob animation-delay-4000"
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: '-10px',
            width: '18rem',
            height: '18rem',
            borderRadius: '50%',
            backgroundColor: theme.colors.brown[3],
            opacity: 0.2
          }}
        />
      </Box>
      
      <Container size="lg" py="4rem" style={{ position: 'relative', zIndex: 10 }}>
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
            <Box ta={{ base: "center", md: "left" }}>
              <Title order={1} className="font-serif" size={{ base: 36, md: 48 }} mb="md" c="brown.6">
                Carpintería Romero
              </Title>
              <Text size={{ base: "lg", md: "xl" }} mb="xl" c="gray.7">
                Tu taller de carpintería artesanal en Milpa Alta, donde la tradición se une con la calidad y el profesionalismo.
              </Text>
              
              <Group gap="md" justify={{ base: 'center', md: 'flex-start' }}>
                <Button 
                  size="lg" 
                  color="brown" 
                  className="animate-bounce"
                  onClick={() => scrollToSection('servicios')}
                >
                  Nuestros Servicios
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  color="brown" 
                  onClick={() => scrollToSection('contacto')}
                >
                  Contáctanos
                </Button>
              </Group>
            </Box>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
            <Flex justify="center">
              <Box style={{ position: 'relative', width: '16rem', height: '16rem', '@media (min-width: 768px)': { width: '20rem', height: '20rem' } }}>
                <Box 
                  className="animate-spin-slow"
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(to top right, #5C4033, #8B4513)'
                  }} 
                />
                <Box style={{ position: 'absolute', inset: '0.5rem', borderRadius: '50%', backgroundColor: 'white', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
                    {/* Logo SVG content */}
                    <circle cx="100" cy="100" r="95" fill="#ffffff" stroke="#8B4513" strokeWidth="3" />
                    
                    <g>
                      {/* Carpenter's tools silhouette */}
                      <path d="M65,75 L135,75 L135,125 L65,125 Z" fill="#F8F0E3" stroke="#8B4513" strokeWidth="2" />
                      <path d="M65,85 L135,85" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />
                      <path d="M65,95 L135,95" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />
                      <path d="M65,105 L135,105" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />
                      <path d="M65,115 L135,115" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />
                      
                      {/* Hammer */}
                      <path d="M60,60 L80,60 L85,70 L55,70 Z" fill="#8B4513" />
                      <rect x="65" y="70" width="10" height="30" fill="#8B4513" />
                      
                      {/* Saw */}
                      <path d="M110,60 L140,60 L145,65 L135,70 L145,75 L135,80 L145,85 L110,85 Z" fill="#8B4513" />
                      
                      {/* Wood plank */}
                      <rect x="85" y="130" width="30" height="15" rx="2" fill="#CD853F" />
                      <path d="M90,130 L90,145 M100,130 L100,145 M110,130 L110,145" stroke="#8B4513" strokeWidth="1" />
                    </g>
                    
                    <path id="textPathTop" d="M100,30 A70,70 0 0,1 170,100" fill="none" />
                    <text>
                      <textPath href="#textPathTop" startOffset="50%" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="14" fill="#5C4033" fontWeight="bold">
                        Carpintería
                      </textPath>
                    </text>
                    
                    <path id="textPathBottom" d="M170,100 A70,70 0 0,1 100,170" fill="none" />
                    <text>
                      <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="14" fill="#5C4033" fontWeight="bold">
                        Romero
                      </textPath>
                    </text>
                    
                    <path d="M35,100 L38,94 L42,100 L38,106 Z" fill="#CD853F" transform="rotate(30, 38, 100)" />
                    <path d="M165,100 L168,94 L172,100 L168,106 Z" fill="#CD853F" transform="rotate(-30, 168, 100)" />
                    <path d="M100,35 L103,29 L107,35 L103,41 Z" fill="#CD853F" transform="rotate(0, 103, 35)" />
                    <path d="M100,165 L103,159 L107,165 L103,171 Z" fill="#CD853F" transform="rotate(0, 103, 165)" />
                  </svg>
                </Box>
              </Box>
            </Flex>
          </Grid.Col>
        </Grid>
        
        <Box style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }} className="animate-bounce">
          <ActionIcon 
            variant="subtle" 
            color="brown" 
            size="xl" 
            radius="xl"
            onClick={() => scrollToSection('servicios')}
          >
            <IconChevronDown size={30} />
          </ActionIcon>
        </Box>
      </Container>
    </Box>
  );
}