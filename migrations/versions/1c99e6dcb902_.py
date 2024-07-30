"""empty message

Revision ID: 1c99e6dcb902
Revises: 
Create Date: 2024-07-30 18:08:37.409163

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1c99e6dcb902'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('is_admin', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('Comment_text', sa.String(length=450), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['author_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('Comment_text')
    )
    op.create_table('followers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_from_id', sa.Integer(), nullable=True),
    sa.Column('user_to_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_from_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['user_to_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('medias',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('media_type', sa.Enum('video', 'image', 'sounds', name='media_type'), nullable=False),
    sa.Column('url', sa.String(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('media_type'),
    sa.UniqueConstraint('url')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('medias')
    op.drop_table('posts')
    op.drop_table('followers')
    op.drop_table('comments')
    op.drop_table('users')
    # ### end Alembic commands ###
