-- CREATE TABLE IF NOT EXISTS test (
--     id INT NOT NULL UNIQUE,
--     note VARCHAR(50)
-- );

CREATE TABLE IF NOT EXISTS usertable (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS userprofile (
    id INT UNIQUE NOT NULL,
    user_id INT NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    gender VARCHAR(10),
    sexual_orientation VARCHAR(50),
    list_of_interests TEXT,
    bio TEXT,
    profile_picture VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES usertable(user_id) ON DELETE CASCADE
);

-- INSERT INTO test (id, note)
-- VALUES (1, 'entry1')
-- ON CONFLICT (id) DO NOTHING;