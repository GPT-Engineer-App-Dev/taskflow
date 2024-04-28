import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Heading } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <Heading mb="6" textAlign="center">
        Todo App
      </Heading>
      <Box display="flex" mb="4">
        <Input placeholder="Add a new task" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} mr="2" />
        <Button onClick={handleAddTask} colorScheme="blue" px="8">
          <FaPlus />
        </Button>
      </Box>
      <List spacing={3}>
        {tasks.map((task, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
            {task}
            <IconButton icon={<FaTrash />} onClick={() => handleDeleteTask(index)} colorScheme="red" aria-label="Delete task" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
