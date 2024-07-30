"""from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Users(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.string, unique=True, nullable=False)
    firstname = db.Column(db.string, unique=False, nullable=False)
    lastname = db.Column(db.string, unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.email} - {self.username}>'

    def serialize(self):
        return {"id": self.id,
                "username": self.username,
                "firstname": self.firstname,
                "lastname": self.lastname,
                "email": self.email}


class Followers(db.Model):
    __tablename__ = "followers"
    user_from_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user_from_to = db.relationship('Users', foreign_keys=[user_from_id])
    user_to_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user_to_to = db.relationship('Users', foreign_keys=[user_to_id])

    def __repr__(self):
        return f'<Followers {self.user_from_id} - {self.user_to_id}>'

    def serialize(self):
        return {"user_from_id": self.user_from_id,
                "user_to_id": self.user_to_id}


class Posts(db.Model):
    __tablename__ = "posts"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user_to = db.relationship('Users', foreign_keys=[user_id], backref=db.backref('post_to', lazy='select'))

    def __repr__(self):
        return f'<Posts {self.user_id}>'

    def serialize(self):
        return {"user_id": self.user_id}


class Medias(db.Model):
    __tablename__ = "medias"
    id = db.Column(db.Integer, primary_key=True)
    medias_type = db.Column(db.string, unique=True, nullable=False)
    url = db.Column(db.string, unique=True, nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey("posts.id"))
    post_to = db.relationship('Posts', foreign_keys=[post_id], backref=db.backref('media_to', lazy='select'))

    def __repr__(self):
        return f'<Medias {self.medias_type}>'

    def serialize(self):
        return {"id": self.id,
                "medias_type": self.medias_type,
                "url": self.url,
                "post_id": self.post_id}


class Comments(db.Model):
    __tablename__ = "comments"
    id = db.Column(db.Integer, primary_key=True)
    comment_text = db.Column(db.string, unique=False, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    author_to = db.relationship('Users', foreign_keys=[author_id])
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
    post_to = db.relationship('Posts', foreign_keys=[post_id], backref=db.backref('comment_to', lazy='select'))

    def __repr__(self):
        return f'<Comments {self.comment_text}>'

    def serialize(self):
        return {"id": self.id,
                "comment_text": self.comment_text,
                "author_id": self.author_id,
                "post_id": self.post_id}"""