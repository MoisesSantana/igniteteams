import { Header } from "@components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/button";

const highlightProps = {
  title: "Nova turma",
  subtitle: "crie a turma para adicionar as pessoas"
}

const buttonProps = {
  title: "Criar"
}

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title={highlightProps.title}
          subtitle={highlightProps.subtitle}
        />
        <Button title={buttonProps.title} />
      </Content>
    </Container>
  )
}