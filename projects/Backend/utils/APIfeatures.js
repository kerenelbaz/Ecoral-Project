class APIfeatures {
  findCommand;
  queryString;

  constructor(findQuery, queryString) {
    this.findCommand = findQuery;
    this.queryString = queryString;
  }
  filter() {
    // build query
    // 1A. filtering
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 2B. advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gt|gte|lte|lt)\b/g,
      (matchedWord) => `$${matchedWord}`
    );

    this.findCommand = this.findCommand.find(JSON.parse(queryStr));
    //console.log(this.findCommand);

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.findCommand = this.findCommand.sort(sortBy);
    } else {
      this.findCommand = this.findCommand.sort("-date");
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.findCommand = this.findCommand.select(fields);
    } else {
      this.findCommand = this.findCommand.select("-__v");
    }
    return this;
  }

  pagination() {
    const page = this.quertStringpage * 1 || 1;
    const limit = this.quertStringlimit * 1;
    const skip = (page - 1) * limit;

    // Apply pagination
    this.findCommand = this.findCommand.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIfeatures;
