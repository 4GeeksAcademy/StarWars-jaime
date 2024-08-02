from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


#Instagram models
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

# Star wars Models

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

""" 
    "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "created": "2024-08-01T16:47:21.084Z",
      "edited": "2024-08-01T16:47:21.084Z",
      "name": "Luke Skywalker",
"""

class CharacterDetails(db.Model):
    __tablename__ = "character_details"
    uid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=False, nullable=False)
    gender = db.Column(db.String, unique=False, nullable=False)
    height = db.Column(db.String, unique=False, nullable=False)
    eye_color = db.Column(db.String, unique=False, nullable=False)
    hair_color = db.Column(db.String, unique=False, nullable=False)
    transport = db.Column(db.String, unique=False, nullable=False)
    planet_origin = db.Column(db.Integer, db.ForeignKey('planets.uid'))
    planet_to = db.relationship('Planets', foreign_keys=[planet_origin], backref=db.backref('planet_to', lazy='select') )
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
                "hair_color": self.hair_color,
                "eye_color": self.eye_color,
                "transport": self.transport,
                "planetOrigin": self.planet_origin}


class Planets(db.Model):
    __tablename__ = "planets"
    uid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    
    def __repr__(self):
        return f'<Character {self.uid}>'

    def serialize(self):
        return {"uid": self.uid,
                "name": self.name,}

"""
    "diameter": "10200",
      "rotation_period": "24",
      "orbital_period": "4818",
      "gravity": "1 standard",
      "population": "1000",
      "climate": "temperate, tropical",
      "terrain": "jungle, rainforests",
      "surface_water": "8",
      "created": "2024-08-01T16:47:21.087Z",
      "edited": "2024-08-01T16:47:21.087Z",
      "name": "Yavin IV",
"""

class PlanetDetails(db.Model):
    __tablename__ = "planet_details"
    uid = db.Column(db.Integer, primary_key=True)
    planet_name = db.Column(db.Integer, unique=True, nullable=False)
    gravity = db.Column(db.String, unique=False, nullable=False)
    diameter = db.Column(db.String, unique=False, nullable=False)
    population = db.Column(db.String, unique=False, nullable=False)
    terrain = db.Column(db.String, unique=False, nullable=False)
    created = db.Column(db.String, unique=False, nullable=False)
    planet_id = db.Column(db.Integer, db.ForeignKey('planets.uid'), unique=True)  
    planet_to = db.relationship('planets', foreign_keys=[planet_id], 
                                    backref=db.backref('planet_to', lazy='select'))
    
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
                "name": self.name,}

"""
      "model": "DS-1 Orbital Battle Station",
      "starship_class": "Deep Space Mobile Battlestation",
      "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
      "cost_in_credits": "1000000000000",
      "length": "120000",
      "crew": "342,953",
      "passengers": "843,342",
      "max_atmosphering_speed": "n/a",
      "hyperdrive_rating": "4.0",
      "MGLT": "10",
      "cargo_capacity": "1000000000000",
      "consumables": "3 years",
      "pilots": [],
      "created": "2020-09-17T17:55:06.604Z",
      "edited": "2020-09-17T17:55:06.604Z",
      "name": "Death Star", 
"""

class StarshipDetails(db.Model):
    __tablename__ = "starship_details"
    uid = db.Column(db.Integer, primary_key=True)
    starship_class = db.Column(db.Integer, unique=True, nullable=False)
    model = db.Column(db.String, unique=False, nullable=False)
    cargo_capacity = db.Column(db.String, unique=False, nullable=False)
    cost = db.Column(db.String, unique=False, nullable=False)
    passengers = db.Column(db.String, unique=False, nullable=False)
    length = db.Column(db.String, unique=False, nullable=False)
    crew = db.Column(db.String, unique=False, nullable=False)
    pilots = db.Column(db.String, unique=False, nullable=False)
    starship_id = db.Column(db.Integer, db.ForeignKey('starships.uid'), unique=True)  
    starship_to = db.relationship('starships', foreign_keys=[starship_id], 
                                    backref=db.backref('starship_to', lazy='select'))