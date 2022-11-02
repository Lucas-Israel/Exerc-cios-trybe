const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if(!name) return res.status(400).send({ message: "O campo name é obrigatório" });
  if(name.length < 4) return res.status(400).send({ message: "O campo name deve ter pelo menos 4 caracteres" })
  next();
};

const priceValidation = (req, res, next) => {
  const { price } = req.body;
  if(price.length = 0) return res.status(400).send({ message: "O campo price é obrigatório" });
  if(+price < 0) return res.status(400).send({ message: "O campo price deve ser um número maior ou igual a zero" })
  next();
};

const descriptionValidation = (req, res, next) => {
  const { description } = req.body;
  const requiredProperties = ['createdAt', 'rating', 'difficulty'];
  const checking = () => {
    return requiredProperties.map((property) => {
      if (property in req.body.description) return false;
      return property;
    });
  }
  if(!description && description !== 0) return res.status(400).send({ message: "O campo description é obrigatório" });
  if(typeof description !== 'object') res.status(400).send({ message: "description precisa ser um objeto" })
  if(!requiredProperties.every((property) => property in req.body.description)) return res.status(400).send({ message: `É necessário informar: ${checking().map((item) => item).filter((item) => item !== false)}` })
  next();
};

const createdAtValidation = (req, res, next) => {
  const { description: {createdAt} } = req.body;

  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (createdAt.match(regex) === null) return res.status(400).send({ message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'"});
  next();
};

const ratingValidation = (req, res, next) => {
  const { description: { rating } } = req.body;

  if (typeof rating !== 'number') return res.status(400).send({ message: "O campo rating deve ser um número"})
  if (rating < 1 || rating > 5 || rating % 1 !== 0) return res.status(400).send({ message: "O campo rating deve ser um número inteiro entre 1 e 5"})
  next();
};

const dificultyValidation = (req, res, next) => {
  const { description: { difficulty } } = req.body;
  const requiredProperties = ['Fácil', 'Médio', 'Difícil'];

  if (typeof difficulty !== 'string') return res.status(400).send({ message: "O campo difficulty deve ser uma palavra"})
  if (!requiredProperties.find((property) => property.includes(difficulty))) return res.status(400).send({ message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'"})
  next();
};


module.exports = {
  nameValidation,
  priceValidation,
  descriptionValidation,
  createdAtValidation,
  ratingValidation,
  dificultyValidation,
}