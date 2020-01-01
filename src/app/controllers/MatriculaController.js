import * as Yup from 'yup';
import Matricula from '../models/Matricula';

class MatriculaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.string().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations Matricula fails' });
    }
    if (req.userId) {
      const {title, duration, price} = req.body;
      const matricula = {tile, duration, price: price * duration}
      const newMatricula = await Matricula.create(matricula);
      return res.json(newMatricula);
    }
  }
}

export default new MatriculaController();
