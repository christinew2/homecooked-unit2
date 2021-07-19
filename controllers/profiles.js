import { Profile } from "../models/profile.js"

export {
    show,
}

function show(req,res){
   
   Profile.findById(req.params.id)
   .then(profile => {
       Profile.findById(req.user.profile._id)
       .then(self => {
           const isSelf= self._id.equals(profile._id)
           res.render("profiles/show", {
               title: `${profile.name}'s Profile`,
               profile, 
               self, 
               isSelf
           })
       })
   })
   .catch(err => {
       console.log(err)
       res.redirect("/")
   })
}