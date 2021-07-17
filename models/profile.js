import mongoose from 'mongoose'

export {
  Profile
}


const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  dishes: [{type: mongoose.Schema.Types.ObjectId, ref: "Dish"}],
  location: String,
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)