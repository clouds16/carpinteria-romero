import { 
  Box, 
  Container, 
  Title, 
  Text, 
  Grid, 
  Group, 
  Flex,
  useMantineTheme 
} from '@mantine/core';

export default function AboutSection() {
  const theme = useMantineTheme();

  return (
    <Box id="nosotros" py="4rem" bg="yellow.0">
      <Container size="lg">
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} className="font-serif" size={{ base: 30, md: 36 }} mb="md" c="brown.6">
              Sobre Nosotros
            </Title>
            
            <Text c="gray.7" mb="md">
              Carpintería Romero nació con la misión de ofrecer servicios de carpintería de alta calidad en el corazón de Milpa Alta. Nuestro equipo de artesanos está dedicado a transformar la madera en piezas únicas y funcionales, respetando técnicas tradicionales mientras incorporamos innovaciones modernas.
            </Text>
            
            <Text c="gray.7" mb="md">
              Nos enorgullece utilizar materiales de primera calidad y mantenernos actualizados con las últimas tendencias en diseño y fabricación de muebles. Cada pieza creada en Carpintería Romero es una oportunidad para mostrar nuestra pasión por la madera y el trabajo bien hecho.
            </Text>
            
            <Text c="gray.7" mb="md">
              Nuestros valores:
            </Text>
            
            <Grid mb="lg">
              <Grid.Col span={6}>
                <Group>
                  <Box w={12} h={12} style={{ borderRadius: '50%', backgroundColor: theme.colors.brown[5] }}></Box>
                  <Text>Artesanía</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={6}>
                <Group>
                  <Box w={12} h={12} style={{ borderRadius: '50%', backgroundColor: theme.colors.brown[5] }}></Box>
                  <Text>Calidad</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={6}>
                <Group>
                  <Box w={12} h={12} style={{ borderRadius: '50%', backgroundColor: theme.colors.brown[5] }}></Box>
                  <Text>Innovación</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={6}>
                <Group>
                  <Box w={12} h={12} style={{ borderRadius: '50%', backgroundColor: theme.colors.brown[5] }}></Box>
                  <Text>Tradición</Text>
                </Group>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Flex justify="center">
              <Box style={{ position: 'relative' }}>
                <Box style={{ 
                  position: 'absolute', 
                  inset: '-1rem', 
                  backgroundColor: theme.colors.yellow[2], 
                  borderRadius: '0.5rem', 
                  transform: 'rotate(3deg)' 
                }}></Box>
                <Box style={{ 
                  position: 'relative', 
                  overflow: 'hidden', 
                  borderRadius: '0.5rem', 
                  width: '100%', 
                  maxWidth: '28rem',
                  aspectRatio: '4/3' 
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style={{ width: '100%', height: '100%' }}>
                    {/* SVG for carpentry workshop illustration */}
                    <rect width="400" height="300" fill="#F8F0E3" />
                    
                    {/* Workshop background */}
                    <rect x="50" y="50" width="300" height="200" rx="5" fill="#CD853F" />
                    <rect x="60" y="60" width="280" height="180" rx="3" fill="#F5DEB3" />
                    
                    {/* Workbench */}
                    <rect x="80" y="160" width="240" height="20" fill="#8B4513" />
                    <rect x="90" y="180" width="20" height="50" fill="#8B4513" />
                    <rect x="290" y="180" width="20" height="50" fill="#8B4513" />
                    
                    {/* Tools on wall */}
                    <rect x="90" y="80" width="40" height="5" fill="#8B4513" />
                    <rect x="150" y="80" width="40" height="5" fill="#8B4513" />
                    <rect x="210" y="80" width="40" height="5" fill="#8B4513" />
                    <rect x="270" y="80" width="40" height="5" fill="#8B4513" />
                    
                    {/* Hanging tools */}
                    <path d="M100,85 L100,120 L110,130 L120,120 L120,85" fill="#696969" stroke="#333" strokeWidth="1" />
                    <path d="M160,85 L160,110 L180,110 L180,85" fill="#696969" stroke="#333" strokeWidth="1" />
                    <rect x="220" y="85" width="20" height="40" fill="#A0522D" />
                    <path d="M280,85 L270,130 L290,130 L280,85" fill="#8B4513" stroke="#5C4033" strokeWidth="1" />
                    
                    {/* Wood on workbench */}
                    <rect x="110" y="140" width="180" height="20" fill="#DEB887" />
                    <path d="M110,140 L110,160 M130,140 L130,160 M150,140 L150,160 M170,140 L170,160 M190,140 L190,160 M210,140 L210,160 M230,140 L230,160 M250,140 L250,160 M270,140 L270,160" stroke="#8B4513" strokeWidth="1" />
                    
                    {/* Sawdust */}
                    <g>
                      <circle cx="130" cy="200" r="2" fill="#DEB887" opacity="0.6" />
                      <circle cx="150" cy="210" r="3" fill="#DEB887" opacity="0.6" />
                      <circle cx="170" cy="205" r="2" fill="#DEB887" opacity="0.6" />
                      <circle cx="190" cy="215" r="4" fill="#DEB887" opacity="0.6" />
                      <circle cx="210" cy="200" r="3" fill="#DEB887" opacity="0.6" />
                      <circle cx="230" cy="210" r="2" fill="#DEB887" opacity="0.6" />
                      <circle cx="250" cy="205" r="3" fill="#DEB887" opacity="0.6" />
                    </g>
                    
                    {/* Workshop sign */}
                    <text x="200" y="250" fontFamily="'Playfair Display', serif" fontSize="16" textAnchor="middle" fill="#5C4033" fontWeight="bold">
                      Carpintería Romero
                    </text>
                    <text x="200" y="270" fontFamily="'Poppins', sans-serif" fontSize="12" textAnchor="middle" fill="#8B4513">
                      Tradición y Artesanía
                    </text>
                  </svg>
                </Box>
              </Box>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}