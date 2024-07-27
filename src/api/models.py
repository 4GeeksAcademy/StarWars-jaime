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
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('Users', foreign_keys=[user_id], 
                            backref=db.backref('comment_to', lazy='select'))


    def __repr__(self):
        return f'<User {self.user_id} - {self.username}>'

    def serialize(self):
        #Do not serialize the password, its a security breach
        return {"id": self.id,
                "username": self.username}


class Medias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    media_type = db.Column(db.Enum, unique=True, nullable=False)
    url = db.Column(db.String, unique= True, nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    user = db.relationship('Users', foreign_keys=[post_id], 
                            backref=db.backref('media_to', lazy='select'))