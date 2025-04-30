import { 
  Box, 
  Container, 
  Title, 
  Text, 
  Grid, 
  Paper, 
  Flex, 
  Group,
  ActionIcon,
  Button,
  useMantineTheme
} from '@mantine/core';
import { 
  IconPhone, 
  IconMapPin, 
  IconBrandInstagram, 
  IconBrandFacebook, 
  IconBrandWhatsapp 
} from '@tabler/icons-react';

export default function ContactSection() {
  const theme = useMantineTheme();

  return (
    <Box id="contacto" py="4rem" bg="white">
      <Container size="lg">
        <Title order={2} ta="center" className="font-serif" size={{ base: 30, md: 36 }} mb="xs" c="brown.6">
          Contáctanos
        </Title>
        <Text ta="center" c="gray.6" mb="3rem" mx="auto" maw={600}>
          Estamos aquí para atenderte y hacer realidad tus proyectos. ¡Solicita una cotización hoy mismo!
        </Text>
        
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Paper
              shadow="md"
              radius="md"
              p="xl"
              sx={{ 
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-0.5rem)',
                  boxShadow: theme.shadows.xl
                },
                border: `1px solid ${theme.colors.yellow[1]}`,
                textAlign: 'center'
              }}
            >
              <Flex direction="column" align="center">
                <ActionIcon 
                  variant="light" 
                  color="brown" 
                  size="xl" 
                  radius="xl"
                  mb="md"
                >
                  <IconPhone size={30} />
                </ActionIcon>
                
                <Title order={3} mb="xs" className="font-serif" c="brown.6">
                  Teléfono
                </Title>
                
                <Text c="gray.7" mb="xs">
                  Llámanos o envía un WhatsApp
                </Text>
                
                <Text size="lg" fw={500} mb="md">
                  +52 55 3922 9944
                </Text>
                
                <Button 
                  variant="outline" 
                  color="green" 
                  leftSection={<IconBrandWhatsapp size={20} />}
                  component="a"
                  href="https://wa.me/525539229944"
                  target="_blank"
                >
                  WhatsApp
                </Button>
              </Flex>
            </Paper>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Paper
              shadow="md"
              radius="md"
              p="xl"
              sx={{ 
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-0.5rem)',
                  boxShadow: theme.shadows.xl
                },
                border: `1px solid ${theme.colors.yellow[1]}`,
                textAlign: 'center'
              }}
            >
              <Flex direction="column" align="center">
                <ActionIcon 
                  variant="light" 
                  color="brown" 
                  size="xl" 
                  radius="xl"
                  mb="md"
                >
                  <IconMapPin size={30} />
                </ActionIcon>
                
                <Title order={3} mb="xs" className="font-serif" c="brown.6">
                  Ubicación
                </Title>
                
                <Text c="gray.7" mb="xs">
                  Visítanos en
                </Text>
                
                <Text size="lg" fw={500} mb="md">
                  Milpa Alta, Ciudad de México
                </Text>
                
                <Box style={{ width: '100%', height: '8rem', backgroundColor: '#F2F2F2', borderRadius: '0.5rem', overflow: 'hidden' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" style={{ width: '100%', height: '100%' }}>
                    {/* Map background */}
                    <rect width="400" height="200" fill="#F2F2F2" />
                    
                    {/* Streets and roads */}
                    <path d="M0,100 L400,100" stroke="#FFFFFF" strokeWidth="10" />
                    <path d="M0,50 L400,50" stroke="#FFFFFF" strokeWidth="5" />
                    <path d="M0,150 L400,150" stroke="#FFFFFF" strokeWidth="5" />
                    <path d="M100,0 L100,200" stroke="#FFFFFF" strokeWidth="5" />
                    <path d="M200,0 L200,200" stroke="#FFFFFF" strokeWidth="10" />
                    <path d="M300,0 L300,200" stroke="#FFFFFF" strokeWidth="5" />
                    
                    {/* Buildings and elements */}
                    <rect x="120" y="60" width="30" height="30" fill="#E0E0E0" />
                    <rect x="160" y="60" width="30" height="30" fill="#E0E0E0" />
                    <rect x="220" y="60" width="50" height="30" fill="#E0E0E0" />
                    <rect x="120" y="110" width="70" height="30" fill="#E0E0E0" />
                    <rect x="220" y="110" width="30" height="30" fill="#E0E0E0" />
                    <rect x="260" y="110" width="30" height="30" fill="#E0E0E0" />
                    
                    {/* Location point */}
                    <g>
                      <circle cx="200" cy="100" r="15" fill="#8B4513" />
                      <circle cx="200" cy="100" r="7" fill="#FFFFFF" />
                      <circle cx="200" cy="100" r="20" fill="none" stroke="#8B4513" strokeWidth="2" opacity="0.5">
                        <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </g>
                    
                    {/* Text */}
                    <text x="200" y="180" fontFamily="'Poppins', sans-serif" fontSize="12" textAnchor="middle" fill="#333333" fontWeight="bold">
                      Milpa Alta, CDMX
                    </text>
                  </svg>
                </Box>
              </Flex>
            </Paper>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Paper
              shadow="md"
              radius="md"
              p="xl"
              sx={{ 
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-0.5rem)',
                  boxShadow: theme.shadows.xl
                },
                border: `1px solid ${theme.colors.yellow[1]}`,
                textAlign: 'center'
              }}
            >
              <Flex direction="column" align="center">
                <ActionIcon 
                  variant="light" 
                  color="brown" 
                  size="xl" 
                  radius="xl"
                  mb="md"
                >
                  <IconBrandInstagram size={30} />
                </ActionIcon>
                
                <Title order={3} mb="xs" className="font-serif" c="brown.6">
                  Redes Sociales
                </Title>
                
                <Text c="gray.7" mb="md">
                  Síguenos y conoce nuestro trabajo
                </Text>
                
                <Group gap="md" mb="md">
                  <ActionIcon variant="filled" color="brown" size="lg" radius="xl">
                    <IconBrandInstagram size={24} />
                  </ActionIcon>
                  
                  <ActionIcon variant="filled" color="blue" size="lg" radius="xl">
                    <IconBrandFacebook size={24} />
                  </ActionIcon>
                </Group>
                
                <Text size="sm" c="gray.5">
                  @carpinteriaromero
                </Text>
              </Flex>
            </Paper>
          </Grid.Col>
        </Grid>
        
        <Box mt="3rem" ta="center">
          <Title order={3} mb="md" className="font-serif" c="brown.6">
            Horario de Atención
          </Title>
          
          <Box mx="auto" maw={600}>
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Flex justify="space-between" py="xs" sx={{ borderBottom: `1px solid ${theme.colors.yellow[1]}` }}>
                  <Text>Lunes a Viernes</Text>
                  <Text fw={500}>8:00 - 18:00</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Flex justify="space-between" py="xs" sx={{ borderBottom: `1px solid ${theme.colors.yellow[1]}` }}>
                  <Text>Sábados</Text>
                  <Text fw={500}>9:00 - 14:00</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col span={12}>
                <Flex justify="space-between" py="xs" sx={{ borderBottom: `1px solid ${theme.colors.yellow[1]}` }}>
                  <Text>Domingos</Text>
                  <Text fw={500}>Cerrado</Text>
                </Flex>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}