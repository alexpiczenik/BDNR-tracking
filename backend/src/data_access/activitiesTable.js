const createActivityTrackingTableQuery = `CREATE TABLE IF NOT EXISTS activity_tracking (
    game_id TEXT,
    Date TEXT,
    id UUID,
    user_id TEXT,
    activity_type TEXT,
    timestamp TIMESTAMP,
    data MAP<TEXT, TEXT>,
    PRIMARY KEY ((game_id, Date), id)
  );`;

module.exports = { createActivityTrackingTableQuery };
