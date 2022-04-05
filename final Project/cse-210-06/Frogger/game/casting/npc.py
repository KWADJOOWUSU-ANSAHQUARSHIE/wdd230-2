from game.casting.actor import Actor
from game.shared.point import Point
from game.shared.color import Color
import random 

MAX_X = 900
MAX_Y = 600
CELL_SIZE = 15
FONT_SIZE = 15
COLS = 60
ROWS = 40

class Npc(Actor):
    """
    An item of value. 
    
    The responsibility of an gem is to provide a positive value.

    Attributes:
        _message (string): A short description about the gem.
    """
    def __init__(self, cols, cell_size, font_size, velocity_factor):
        """define properties"""
        self._text = "O"
        x = random.randrange(0, MAX_X)
        y = random.randrange(0, MAX_Y)
        position = Point(x, y)
        
        position = position.scale(CELL_SIZE)

        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        color = Color(r, g, b)
        self.set_text("*")
        self.set_font_size(FONT_SIZE)
        self.set_color(color)
        self.set_position(position)
        direction = Point(0, velocity_factor)
        direction = direction.scale(cell_size)
        self.set_velocity(direction)


        
