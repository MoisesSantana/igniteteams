import { Header } from '@components/header';
import { Container } from './styles';
import { Highlight } from '@components/highlight';
import { GroupCard } from '@components/group-card';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/list-empty';

const highlightProps = {
  title: "Turmas",
  subtitle: "jogue com sua turma"
}

const listEmptyProps = {
  message: "Que tal cadastrar a primeira turma?"
}

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight
        title={ highlightProps.title }
        subtitle={ highlightProps.subtitle }
      />
      <FlatList
        data={ groups }
        keyExtractor={ item => item }
        renderItem={ ({ item }) => (
          <GroupCard title={ item } />
        ) }
        ListEmptyComponent={ () => <ListEmpty message={listEmptyProps.message} />}
        contentContainerStyle={ groups.length === 0 && { flex: 1 } }
      />
    </Container>
  );
}
