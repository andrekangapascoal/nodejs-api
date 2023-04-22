const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", function (req, res) {
  res.send("Ola mundo!");
});

app.get("/curso", function (req, res) {
  res.send(cursos);
});

app.get("/curso/:id", function (req, res) {
  var curso = cursos.find(function (item) {
    return item.id == req.params.id;
  });
  res.send(curso);
});

// criar um novo post
app.post("/curso/", function (req, res) {
  var curso = req.body;
  //comando para apagar o id último elemento do array e adicionar
  curso.id = cursos[cursos.length - 1].id + 1;
  cursos.push(curso);
  res.send(curso);
});

//editar um curso
app.put("/curso/:id", function (req, res) {
  var curso = req.body;
  curso.id = req.params.id;
  var index = cursos.findIndex(function (item) {
    return item.id == curso.id;
  });

  cursos[index] = curso;
  res.send(curso);
});

//apagar um curso
app.delete("/curso/:id", function (req, res) {
  var index = cursos.findIndex(function (item) {
    return item.id == req.params.id;
  });

  cursos.splice(index, 1);
  res.send(cursos);
});

app.listen(3000, function () {
  console.log("Servidor Operacional");
});

const cursos = [
  {
    id: 1,
    nome: "Introdução ao flexbox",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duracao: 10,
  },
  {
    id: 2,
    nome: "Boostrap do jeito certo",
    descricao:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    duracao: 20,
  },
];
