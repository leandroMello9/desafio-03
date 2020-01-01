import * as Yup from 'yup';
import students from '../models/Students';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      idade: Yup.string().required(),
      peso: Yup.string().required(),
      altura: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations Student fails' });
    }
    if (req.userId) {
      const student = await students.create(req.body);
      const { name, email, altura, peso } = student;
      res.json({
        name,
        email,
        altura,
        peso,
      });
    }
  }
}

export default new StudentController();
