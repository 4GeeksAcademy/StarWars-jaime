"""empty message

Revision ID: bb05c370aab0
Revises: 1c99e6dcb902
Create Date: 2024-08-02 11:56:36.747501

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bb05c370aab0'
down_revision = '1c99e6dcb902'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('characters',
    sa.Column('uid', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('uid'),
    sa.UniqueConstraint('name')
    )
    op.create_table('planet_details',
    sa.Column('uid', sa.Integer(), nullable=False),
    sa.Column('planet_name', sa.Integer(), nullable=False),
    sa.Column('planet_id', sa.Integer(), nullable=False),
    sa.Column('gravity', sa.String(), nullable=False),
    sa.Column('diameter', sa.String(), nullable=False),
    sa.Column('population', sa.String(), nullable=False),
    sa.Column('terrain', sa.String(), nullable=False),
    sa.Column('created', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('uid'),
    sa.UniqueConstraint('planet_id'),
    sa.UniqueConstraint('planet_name')
    )
    op.create_table('planets',
    sa.Column('uid', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('uid'),
    sa.UniqueConstraint('name')
    )
    op.create_table('starship_details',
    sa.Column('uid', sa.Integer(), nullable=False),
    sa.Column('starship_id', sa.Integer(), nullable=False),
    sa.Column('model', sa.String(), nullable=False),
    sa.Column('cargo_capacity', sa.String(), nullable=False),
    sa.Column('cost', sa.String(), nullable=False),
    sa.Column('passengers', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('uid'),
    sa.UniqueConstraint('starship_id')
    )
    op.create_table('starships',
    sa.Column('uid', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('uid'),
    sa.UniqueConstraint('name')
    )
    op.create_table('character_details',
    sa.Column('uid', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('gender', sa.String(), nullable=False),
    sa.Column('height', sa.String(), nullable=False),
    sa.Column('eye_color', sa.String(), nullable=False),
    sa.Column('hair_color', sa.String(), nullable=False),
    sa.Column('transport', sa.String(), nullable=False),
    sa.Column('planet_origin', sa.String(), nullable=False),
    sa.Column('character_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['character_id'], ['characters.uid'], ),
    sa.PrimaryKeyConstraint('uid'),
    sa.UniqueConstraint('character_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('character_details')
    op.drop_table('starships')
    op.drop_table('starship_details')
    op.drop_table('planets')
    op.drop_table('planet_details')
    op.drop_table('characters')
    # ### end Alembic commands ###
