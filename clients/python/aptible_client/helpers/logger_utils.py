import logging
import time


def setup_logger() -> logging.Logger:
    logging.basicConfig(
        datefmt='%Y-%m-%d %H:%M:%S',
        format='%(asctime)s %(levelname)-8s %(message)s',
        encoding='utf-8',
        handlers=[
            logging.FileHandler(f'{time.time_ns()}.log'),
            logging.StreamHandler()
        ],
        level=logging.DEBUG
    )
    return logging.getLogger()
