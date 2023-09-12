import { Header } from '@components/header';
import { Container } from './styles';
import { Highlight } from '@components/highlight';

const TITLE = "Turmas"
const SUBTITLE = "jogue com sua turma"

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title={ TITLE } subtitle={ SUBTITLE } />
    </Container>
  );
}
