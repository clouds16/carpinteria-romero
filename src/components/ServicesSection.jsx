import { 
  Box, 
  Container, 
  Title, 
  Text, 
  Grid, 
  Paper, 
  Flex, 
  useMantineTheme 
} from '@mantine/core';
import { 
  IconWood, 
  IconArmchair, 
  IconDoor, 
  IconHome, 
  IconTool 
} from '@tabler/icons-react';

export default function ServicesSection() {
  const theme = useMantineTheme();

  const services = [
    { icon: IconWood, name: 'Muebles a Medida', description: 'Diseñamos y fabricamos muebles personalizados para todos los espacios de tu hogar.' },
    { icon: IconArmchair, name: 'Restauración', description: 'Recuperamos y restauramos tus muebles de madera dándoles una nueva vida.' },
    { icon: IconDoor, name: 'Puertas y Ventanas', description: 'Elaboramos e instalamos puertas y ventanas de madera con los más altos estándares de calidad.' },
    { icon: IconHome, name: 'Acabados de Interiores', description: 'Creamos revestimientos, escaleras y elementos decorativos que transforman tus espacios.' },
    { icon: IconTool, name: 'Carpintería General', description: 'Ofrecemos soluciones en carpintería para proyectos residenciales y comerciales.' },
  ];

  return (
    <Box id="servicios" py="4rem" bg="white">
      <Container size="lg">
        <Title order={2} ta="center" className="font-serif" size={{ base: 30, md: 36 }} mb="xs" c="brown.6">
          Nuestros Servicios
        </Title>
        <Text ta="center" c="gray.6" mb="3rem" mx="auto" maw={600}>
          En Carpintería Romero ofrecemos una variedad de servicios profesionales para transformar la madera en obras funcionales y estéticas.
        </Text>
        
        <Grid>
          {services.map((service, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
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
                  border: `1px solid ${theme.colors.yellow[3]}`
                }}
              >
                <Flex direction="column" align="center">
                  <Flex 
                    align="center" 
                    justify="center" 
                    mb="md" 
                    w={64}
                    h={64}
                    sx={{ 
                      backgroundColor: theme.colors.yellow[1],
                      borderRadius: '50%',
                      color: theme.colors.brown[5]
                    }}
                  >
                    <service.icon size={32} stroke={1.5} />
                  </Flex>
                  
                  <Title order={3} mb="sm" className="font-serif" c="brown.6">
                    {service.name}
                  </Title>
                  
                  <Text c="gray.6" ta="center">
                    {service.description}
                  </Text>
                </Flex>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}