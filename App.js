import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, List } from "react-native-paper";
import {
  black,
  green100,
} from "react-native-paper/src/styles/themes/v2/colors";

export default function App() {
  const [conta, setConta] = useState("");

  function calcula(value) {
    if (
      conta === "" &&
      value !== "0" &&
      value !== "/" &&
      value !== "*" &&
      value !== "-" &&
      value !== "=" &&
      value !== "C" &&
      value !== "+"
    ) {
      setConta(conta + value);
    } else if (value === "C") {
      setConta("");
    } else if (
      !conta.includes("/") &&
      !conta.includes("*") &&
      !conta.includes("-") &&
      !conta.includes("+") &&
      value !== "="
    ) {
      setConta(conta + value);
    } else if (
      value !== "/" &&
      value !== "*" &&
      value !== "-" &&
      value !== "=" &&
      value !== "+"
    ) {
      setConta(conta + value);
    } else {
      if (conta.includes("+")) {
        const [first, second] = conta.split("+").map(Number);
        setConta((first + second).toString());
      } else if (conta.includes("-")) {
        const [first, second] = conta.split("-").map(Number);
        setConta((first - second).toString());
      } else if (conta.includes("*")) {
        const [first, second] = conta.split("*").map(Number);
        setConta((first * second).toString());
      } else if (conta.includes("/")) {
        const [first, second] = conta.split("/").map(Number);
        setConta((first / second).toString());
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[{ textAlign: "right" }, styles.resultado]}>{conta}</Text>
      <View style={[styles.containerBotoes, { marginTop: 50 }]}>
        <Button style={styles.botoes} onPress={() => calcula("7")}>
          7
        </Button>
        <Button style={styles.botoes} onPress={() => calcula("8")}>
          8
        </Button>
        <Button style={styles.botoes} onPress={() => calcula("9")}>
          9
        </Button>
        <Button style={styles.botoes} onPress={() => calcula("/")}>
          /
        </Button>
      </View>

      <View style={styles.containerBotoes}>
        <Button style={styles.botoes} onPress={() => calcula("4")}>
          4
        </Button>
        <Button style={styles.botoes} onPress={() => calcula("5")}>
          5
        </Button>
        <Button style={styles.botoes} onPress={() => calcula("6")}>
          6
        </Button>
        <Button style={styles.botoes} onPress={() => calcula("*")}>
          *
        </Button>
      </View>

      <View style={styles.containerBotoes}>
        <Button style={styles.botoes} onPress={() => calcula("1")}>
          1
        </Button>
        <Button style={styles.botoes} onPress={() => calcula("2")}>
          2
        </Button>
        <Button style={styles.botoes} onPress={() => calcula("3")}>
          3
        </Button>
        <Button style={styles.botoes} onPress={() => calcula("-")}>
          -
        </Button>
      </View>

      <View style={styles.containerBotoes}>
        <Button style={styles.botoes} onPress={() => calcula("C")}>
          C
        </Button>
        <Button style={styles.botoes} onPress={() => calcula("0")}>
          0
        </Button>
        <Button style={styles.botoes} onPress={() => calcula("=")}>
          =
        </Button>
        <Button style={styles.botoes} onPress={() => calcula("+")}>
          +
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  resultado: {
    width: "100%",
    marginRight: 50,
    fontSize: 50,
  },
  containerBotoes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  botoes: {
    width: 80,
    height: 60,
    color: black,
    backgroundColor: green100,
    alignContent: "center",
    justifyContent: "center",
  },
});
