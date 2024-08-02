from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    is_admin = db.Column(db.Boolean(), unique=False, nullable=False)
    
    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        #Do not serialize the password, its a security breach
        return {"id": self.id,
            "email": self.email,
            "username": self.username}


class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user_to = db.relationship('Users', foreign_keys=[user_id], backref=db.backref('post_to', lazy='select'))

    def __repr__(self):
        return f'<Posts {self.user_id}>'

    def serialize(self):
        return {"user_id": self.user_id}


class Followers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_from_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user_from_to = db.relationship('Users', foreign_keys=[user_from_id])
    user_to_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user_to_to = db.relationship('Users', foreign_keys=[user_to_id])

    def __repr__(self):
        return f'<Followers {self.user_from_id} - {self.user_to_id}>'

    def serialize(self):
        return {"user_from_id": self.user_from_id,
                "user_to_id": self.user_to_id}



"""class Author(db.model):
    #__tablename__= 'author_country'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=True, nullable=False)
    lastname = db.Column(db.String(), unique=True, nullable=False)
       user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    # Relaciones
    user = db.relationship('Users', foreign_keys=[user_id], 
                            backref=db.backref('author_to', lazy='select'))
"""

class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Comment_text = db.Column(db.String(450), unique=True, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    author_to = db.relationship('Users', foreign_keys=[author_id])
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('Users', foreign_keys=[user_id], 
                            backref=db.backref('comment_to', lazy='select'))


    def __repr__(self):
        return f'<Comments {self.comment_text}>'

    def serialize(self):
        #Do not serialize the password, its a security breach
        return {"id": self.id,
                "comment_text": self.comment_text,
                "author_id": self.author_id,
                "post_id": self.post_id}


class Medias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    media_type = db.Column(db.Enum('video', 'image', 'sounds', name='media_type'), unique=True, nullable=False)
    url = db.Column(db.String, unique= True, nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
    post_to = db.relationship('Posts', foreign_keys=[post_id], 
                            backref=db.backref('media_to', lazy='select'))
    
    def __repr__(self):
        return f'<Medias {self.medias_type}>'

    def serialize(self):
        return {"id": self.id,
                "medias_type": self.medias_type,
                "url": self.url,
                "post_id": self.post_id}

#Instagram models

class Characters(db.Model):
    __tablename__ = "characters"
    uid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)

    def __repr__(self):
        return f'<Characters {self.name}>'

    def serialize(self):
        return {"uid": self.uid,
                "name": self.name,
                "details": [row.serialize() for row in self.character_to][0]}


class CharacterDetails(db.Model):
    __tablename__ = "character_details"
    uid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=False, nullable=False)
    gender = db.Column(db.String, unique=False, nullable=False)
    height = db.Column(db.String, unique=False, nullable=False)
    eye_color = db.Column(db.String, unique=False, nullable=False)
    hair_color = db.Column(db.String, unique=False, nullable=False)
    transport = db.Column(db.String, unique=False, nullable=False)
    planet_origin = db.Column(db.String, unique=False, nullable=False)
    character_id = db.Column(db.Integer, db.ForeignKey('characters.uid'), unique=True)  # Unique, para definir una relación uno a uno.
    character_to = db.relationship('Characters', foreign_keys=[character_id], 
                                    backref=db.backref('character_to', lazy='select'))

    def __repr__(self):
        return f'<Character {self.name} - {self.planet_origin}>'

    def serialize(self):
        return {"uid": self.uid,
                "name": self.name,
                "height": self.height,
                "gender": self.gender,
                "hair_color": self.hair_color}


class Planets(db.Model):
    __tablename__ = "planets"
    uid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    
    def __repr__(self):
        return f'<Character {self.uid}>'

    def serialize(self):
        return {"uid": self.uid,
                "name": self.name,}


class PlanetDetails(db.Model):
    __tablename__ = "planet_details"
    uid = db.Column(db.Integer, primary_key=True)
    planet_name = db.Column(db.Integer, unique=True, nullable=False)
    planet_id = db.Column(db.Integer, unique=True, nullable=False)
    gravity = db.Column(db.String, unique=False, nullable=False)
    diameter = db.Column(db.String, unique=False, nullable=False)
    population = db.Column(db.String, unique=False, nullable=False)
    terrain = db.Column(db.String, unique=False, nullable=False)
    created = db.Column(db.String, unique=False, nullable=False)
    
    def __repr__(self):
        return f'<Character {self.planet_name}>'

    def serialize(self):
        return {"uid": self.uid,
                "planet_name": self.planet_name,
                "planet_id": self.firstname,
                "gravity": self.gravity,
                "diameter": self.diameter,
                "population": self.population,
                "terrain": self.terrain,
                "created": self.created}


class Starships(db.Model):
    __tablename__ = "starships"
    uid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)

    def __repr__(self):
        return f'<Character {self.name}>'

    def serialize(self):
        return {"uid": self.uid,
                "planet_name": self.planet_name,}


class StarshipDetails(db.Model):
    __tablename__ = "starship_details"
    uid = db.Column(db.Integer, primary_key=True)
    starship_id = db.Column(db.Integer, unique=True, nullable=False)
    model = db.Column(db.String, unique=False, nullable=False)
    cargo_capacity = db.Column(db.String, unique=False, nullable=False)
    cost = db.Column(db.String, unique=False, nullable=False)
    passengers = db.Column(db.String, unique=False, nullable=False)