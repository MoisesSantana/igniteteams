import { Header } from '@components/header';
import { Container } from './styles';
import { Highlight } from '@components/highlight';
import { GroupCard } from '@components/group-card';

const highlightProps = {
  title: "Turmas",
  subtitle: "jogue com sua turma"
}

const groupCardProps = {
  title: "Turma 1"
}

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight
        title={ highlightProps.title }
        subtitle={ highlightProps.subtitle }
      />
      <GroupCard title={ groupCardProps.title } />
    </Container>
  );
}
