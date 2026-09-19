import { useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Task {
  id: string,
  title: string,
  done: boolean
}

export default function Index() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const adicionar = () => {
    if (!newTask) {
      Alert.alert('Preencha a tarefa!')
      return;
    }

    const task: Task = {
      id: new Date().toString(),
      title: newTask,
      done: false
    }

    setTasks([...tasks, task]);
    setNewTask('');
  }

  const remover = (id: string) => {
    const tasksAtualizadas = tasks
      .filter(task => task.id != id)
    setTasks(tasksAtualizadas)
  }

  const concluir = (id: string) => {
    const tasksAtualizadas = tasks
      .map(taks => {
        if (taks.id == id) {
          taks.done = !taks.done
        }

        return taks
      })

    setTasks(tasksAtualizadas)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Informe a descrição da tarefa"
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.btnAdd}
        onPress={adicionar}
      >
        <Text>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={item.done
              ? { textDecorationLine: 'line-through' }
              : null}>
              {index + 1} - {item.title}
            </Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Button
                title="Remover"
                color={"red"}
                onPress={() => remover(item.id)} />
              <Button
                title={item.done ? 'Desfazer' : 'Concluir'} color={"green"}
                onPress={() => concluir(item.id)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 10
  },
  input: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 10
  },
  btnAdd: {
    backgroundColor: 'cyan',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  item: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center'
  }
});
